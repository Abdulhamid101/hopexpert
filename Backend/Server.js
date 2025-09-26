import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import Datastore from "nedb-promises";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      const ok = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
      cb(ok ? null : new Error(`CORS blocked: ${origin}`), ok);
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
  })
);

app.get("/api/countries", (_req, res) => {
  const file = path.join(__dirname, "public", "countries.json");
  if (!fs.existsSync(file)) {
    return res.status(404).json({ ok: false, error: "countries.json missing" });
  }
  res.sendFile(file);
});

app.use(express.json({ limit: "512kb" }));

const db = Datastore.create({
  filename: path.join(__dirname, "database", "leads.db"),
  autoload: true,
});
await db.ensureIndex({ fieldName: "createdAt" });

const emailOk = (v) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
const nowIso = () => new Date().toISOString();
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );

function requireAuth(req, res, next) {
  const token = (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!process.env.ADMIN_TOKEN) {
    return res
      .status(500)
      .json({ ok: false, error: "ADMIN_TOKEN not set on server" });
  }
  if (token && token === process.env.ADMIN_TOKEN) return next();
  return res.status(401).json({ ok: false, error: "Unauthorized" });
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_SECURE || "false").toLowerCase() === "true",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  logger: true,
  debug: true,
});

transporter.verify((err) => {
  if (err) console.error("SMTP verify failed:", err);
  else console.log("SMTP server is ready to take messages");
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, msg: "backend alive", ts: nowIso() });
});

app.post("/api/leads", async (req, res) => {
  try {
    const {
      first,
      last,
      email,
      phone,
      country,
      type,
      amount,
      summary,
      createdAt,
    } = req.body || {};
    if (!first || !last || !email) {
      return res
        .status(400)
        .json({
          ok: false,
          error: "Missing required fields (first, last, email)",
        });
    }
    if (!emailOk(email)) {
      return res.status(400).json({ ok: false, error: "Invalid email format" });
    }

    const doc = {
      first,
      last,
      email,
      phone,
      country,
      type,
      amount,
      summary,
      createdAt: createdAt || nowIso(),
      status: "new",
      messages: [],
    };
    const saved = await db.insert(doc);

    const adminHtml = `
      <h2>New Case Submission</h2>
      <p><b>Lead ID:</b> ${saved._id}</p>
      <p><b>Submitted:</b> ${esc(saved.createdAt)}</p>
      <p><b>Name:</b> ${esc(saved.first)} ${esc(saved.last)}</p>
      <p><b>Email:</b> ${esc(saved.email)}</p>
      <p><b>Phone:</b> ${esc(saved.phone || "-")}</p>
      <p><b>Country:</b> ${esc(saved.country || "-")}</p>
      <p><b>Scam Type:</b> ${esc(saved.type || "-")}</p>
      <p><b>Amount:</b> ${esc(saved.amount || "-")}</p>
      <p><b>Summary:</b><br>${esc(saved.summary || "").replace(
        /\n/g,
        "<br/>"
      )}</p>
    `;
    const adminText = `New Case Submission
Lead ID: ${saved._id}
Submitted: ${saved.createdAt}
Name: ${saved.first} ${saved.last}
Email: ${saved.email}
Phone: ${saved.phone || "-"}
Country: ${saved.country || "-"}
Scam Type: ${saved.type || "-"}
Amount: ${saved.amount || "-"}
Summary:
${saved.summary || "-"}`;

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: `"${saved.first} ${saved.last}" <${saved.email}>`,
      subject: `New Case — ${saved.type || "Unknown Type"} (${
        saved.country || "Unknown"
      })`,
      text: adminText,
      html: adminHtml,
    });

    await db.update(
      { _id: saved._id },
      { $set: { adminMessageId: info?.messageId } }
    );

    console.log("Admin message sent:", info?.messageId, info?.response);
    res.json({ ok: true, id: saved._id, message: "Case submitted" });
  } catch (err) {
    console.error("Send error details:", {
      message: err?.message,
      code: err?.code,
      responseCode: err?.responseCode || err?.response?.status,
      response: err?.response?.toString?.(),
    });
    const reason =
      err?.response?.toString?.() || err?.message || "Email sending failed";
    res.status(500).json({ ok: false, error: reason });
  }
});

app.get("/api/leads", requireAuth, async (req, res) => {
  const items = await db.cfind({}).sort({ createdAt: -1 }).limit(500).exec();
  res.json({ ok: true, items });
});

app.get("/api/leads/:id", requireAuth, async (req, res) => {
  const lead = await db.findOne({ _id: req.params.id });
  if (!lead) return res.status(404).json({ ok: false, error: "Not found" });
  res.json({ ok: true, lead });
});


app.post("/api/leads/:id/reply", requireAuth, async (req, res) => {
  const { subject, message } = req.body || {};
  if (!subject || !message)
    return res
      .status(400)
      .json({ ok: false, error: "subject and message are required" });

  const lead = await db.findOne({ _id: req.params.id });
  if (!lead)
    return res.status(404).json({ ok: false, error: "Lead not found" });

  const headers = {};
  if (lead.adminMessageId) {
    headers["In-Reply-To"] = lead.adminMessageId;
    headers["References"] = lead.adminMessageId;
  }

  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM, 
    to: lead.email,
    subject,
    text: message,
    html: `<p>${esc(message).replace(/\n/g, "<br/>")}</p>`,
    headers,
  });

  await db.update(
    { _id: lead._id },
    {
      $push: {
        messages: {
          at: nowIso(),
          subject,
          message,
          dir: "out",
          messageId: info?.messageId,
        },
      },
      $set: { status: "replied" },
    }
  );

  console.log("Reply sent:", info?.messageId, info?.response);
  res.json({ ok: true, message: "Reply sent" });
});

app.use(express.static(path.join(__dirname, "public")));

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
