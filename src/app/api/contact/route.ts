import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Here we'll use Resend to send emails
    // For now, we'll use a simple mailto approach or you can configure an email service
    const emailBody = `
      New Contact Form Submission

      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}

      Message:
      ${message}
    `;

    // Log the submission (in production, this would send an email)
    console.log("Contact form submission:", emailBody);

    // You'll need to set up email sending here
    // Options:
    // 1. Use Resend (recommended for Next.js)
    // 2. Use SendGrid
    // 3. Use Cloudflare Email Workers
    // 4. Use any SMTP service

    // For now, we'll use a webhook service like Web3Forms
    // You can get a free access key from https://web3forms.com
    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

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
        return NextResponse.json({
          message: "Email sent successfully",
        });
      } else {
        throw new Error("Failed to send email");
      }
    }

    // Fallback response if no email service is configured
    return NextResponse.json({
      message: "Form received. Please call or email directly for immediate response.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
