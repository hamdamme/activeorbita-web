export type Inquiry = { name: string; email: string; company: string; message: string };
type Delivery = (inquiry: Inquiry) => Promise<void>;
const limits = { name: 120, email: 254, company: 200, message: 20000 };
const received = "Your inquiry was received successfully.";

export function inquiryHtml(inquiry: Inquiry) {
  const escape = (value: string) => value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]!);
  return `<h2>New Contact Inquiry</h2>${Object.entries(inquiry).map(([key, value]) =>
    `<p><strong>${key}:</strong><br />${escape(value || "Not provided").replace(/\n/g, "<br />")}</p>`
  ).join("")}`;
}

export function createContactHandler({ save, send, report }: {
  save: Delivery; send: Delivery; report: (channel: "database" | "email") => void;
}) {
  return async (request: Request) => {
    const reply = (body: object, status = 200) => Response.json(body, {
      status, headers: { "Cache-Control": "no-store" },
    });
    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
      return reply({ error: "Please submit the inquiry as JSON." }, 415);
    }
    // Bound streamed bytes too; Content-Length is optional and cannot be trusted.
    const reader = request.body?.getReader();
    if (!reader) return reply({ error: "Please provide an inquiry." }, 400);
    let body: unknown;
    try {
      const chunks: Uint8Array[] = [];
      let size = 0;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > 128000) {
          await reader.cancel();
          return reply({ error: "Your inquiry is too long. Please shorten it." }, 413);
        }
        chunks.push(value);
      }
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
      body = JSON.parse(new TextDecoder().decode(bytes));
    } catch {
      return reply({ error: "Please provide a valid inquiry." }, 400);
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return reply({ error: "Please provide a valid inquiry." }, 400);
    }
    const input = body as Record<string, unknown>;
    // A field hidden from visitors catches basic automated form submissions.
    if (input.website) return reply({ success: true, message: received });
    const inquiry: Inquiry = { name: "", email: "", company: "", message: "" };
    for (const key of Object.keys(limits) as (keyof Inquiry)[]) {
      const value = input[key] ?? "";
      if (typeof value !== "string" || value.length > limits[key]) {
        return reply({ error: `Please check the ${key} field (maximum ${limits[key]} characters).` }, 400);
      }
      inquiry[key] = value.trim();
    }
    if (!inquiry.name || !inquiry.email || !inquiry.message) {
      return reply({ error: "Name, email, and message are required." }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email) || /[\r\n]/.test(inquiry.name)) {
      return reply({ error: "Please enter a valid name and email address." }, 400);
    }
    // Both channels are attempted, including when an adapter throws synchronously.
    const [saved, emailed] = await Promise.allSettled([
      Promise.resolve().then(() => save(inquiry)),
      Promise.resolve().then(() => send(inquiry)),
    ]);
    if (saved.status === "rejected") report("database");
    if (emailed.status === "rejected") report("email");
    if (emailed.status === "fulfilled") return reply({ success: true, message: received });
    if (saved.status === "fulfilled") return reply({ success: true,
      message: "Your inquiry was saved, but the email notification could not be sent. For a prompt response, call 773-882-8507.",
    }, 202);
    return reply({ error: "We could not receive your inquiry. Your message is still here; please try again or call 773-882-8507." }, 503);
  };
}
