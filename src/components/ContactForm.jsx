import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Netlify required hidden input */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Anti-spam honeypot */}
        <input type="text" name="bot-field" style={{ display: "none" }} />

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Success message */}
        {submitted && (
          <p className="text-green-600 text-sm text-center">
            Message sent successfully!
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
