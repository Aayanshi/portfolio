import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ContactDrawer = ({ open, onClose }) => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // redirect/404 ro

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
      });

      setSuccess(true); // success message
      form.reset(); // fields clear
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="flex-1 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            className="w-full sm:w-[420px] bg-white p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-4 text-purple-900">
              <h2 className="text-xl font-bold">Let’s Connect 👋</h2>
              <button onClick={onClose} className="text-xl">
                ✖
              </button>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="bot-field" style={{ display: "none" }} />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border px-4 py-2 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border px-4 py-2 rounded"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full border px-4 py-2 rounded text-black"
              />

              <button
                type="submit"
                disabled={success}
                className={`w-full py-2 rounded text-white ${
                  success
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-800 hover:bg-purple-700"
                }`}
              >
                {success ? "Sent ✅" : "Send Message"}
              </button>
            </form>
            <span className="mt-80 block text-sm text-gray-500 text-center">
              Made with ❤️ by Aayanshi
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactDrawer;
