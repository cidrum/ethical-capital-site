interface Env {
  WEB3FORMS_ACCESS_KEY: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const body = await context.request.json();
    const { name, email, phone, message } = body as any;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const WEB3FORMS_KEY = context.env.WEB3FORMS_ACCESS_KEY;

    if (WEB3FORMS_KEY) {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("subject", "New Contact from Ethical Capital Website");
      formData.append("from_name", name);
      formData.append("email", email);
      formData.append("phone", phone || "");
      formData.append("message", message);
      formData.append("to", "rmkmgtholdings@gmail.com");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        return new Response(
          JSON.stringify({ message: "Email sent successfully" }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      } else {
        throw new Error("Failed to send email");
      }
    }

    // Fallback response if no email service is configured
    return new Response(
      JSON.stringify({
        message: "Form received. Please call or email directly for immediate response.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process form submission" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
