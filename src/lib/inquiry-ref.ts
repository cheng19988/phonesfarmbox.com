/** Human-readable RFQ reference for buyer confirmation emails and success screens */
export function generateInquiryRef(): string {
  const d = new Date();
  const ymd =
    String(d.getUTCFullYear()) +
    String(d.getUTCMonth() + 1).padStart(2, "0") +
    String(d.getUTCDate()).padStart(2, "0");
  const seq = String(Math.floor(Math.random() * 9000) + 1000);
  return `PFB-${ymd}-${seq}`;
}
