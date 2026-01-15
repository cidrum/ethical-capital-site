"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Submit directly to Web3Forms (client-side)
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "b23a8a1d-bd5b-4c12-8cbd-f226c01510aa");
      formDataToSend.append("subject", "New Contact from Ethical Capital Website");
      formDataToSend.append("from_name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("redirect", "false");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-24 mt-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Interested in discussing a business acquisition or distressed property? Let&apos;s talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
              <p className="text-gray-600">
                For immediate inquiries, feel free to reach out directly.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <a
                href="tel:+13522634219"
                className="text-blue-600 hover:text-blue-700 text-lg"
              >
                (352) 263-4219
              </a>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <a
                href="mailto:rmkmgtholdings@gmail.com"
                className="text-blue-600 hover:text-blue-700 text-lg"
              >
                rmkmgtholdings@gmail.com
              </a>
            </div>

            <div className="pt-6 border-t">
              <h3 className="text-xl font-semibold mb-4">What to Prepare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Basic business financials (if selling a business)</li>
                <li>• Property details (if selling real estate)</li>
                <li>• Your timeline and expectations</li>
                <li>• Any questions you&apos;d like to discuss</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Sorry, there was an error sending your message. Please try calling or emailing directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
