type InquiryPayload = {
  name: string;
  email: string;
  country?: string;
  whatsapp?: string;
  phone?: string;
  deviceQuantity?: string;
  productInterest?: string;
  budget?: string;
  message?: string;
};

function formatInquiryText(data: InquiryPayload) {
  return [
    "📩 New inquiry — phonesfarmbox.com",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.country ? `Country: ${data.country}` : null,
    data.whatsapp ? `WhatsApp/TG: ${data.whatsapp}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    data.deviceQuantity ? `Device qty: ${data.deviceQuantity}` : null,
    data.productInterest ? `Interest: ${data.productInterest}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    data.message ? `\nMessage:\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function notifyInquiry(data: InquiryPayload) {
  const text = formatInquiryText(data);
  const errors: string[] = [];

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (botToken && chatId) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      if (!res.ok) errors.push(`Telegram: ${await res.text()}`);
    } catch (e) {
      errors.push(`Telegram: ${e instanceof Error ? e.message : "failed"}`);
    }
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL;
  if (resendKey && notifyEmail) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "inquiry@phonesfarmbox.com",
          to: [notifyEmail],
          subject: `New hardware inquiry from ${data.name}`,
          text,
        }),
      });
      if (!res.ok) errors.push(`Email: ${await res.text()}`);
    } catch (e) {
      errors.push(`Email: ${e instanceof Error ? e.message : "failed"}`);
    }
  }

  if (!botToken && !chatId && !resendKey) {
    console.warn("[notify] No TELEGRAM_* or RESEND_API_KEY configured — inquiry saved to DB only.");
  }

  return { ok: errors.length === 0, errors };
}
