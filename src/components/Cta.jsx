import { useState } from "react";
import ContactDrawer from "./ContactDrawer";

const ContactCTA = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-purple-800 text-white px-5 py-3 rounded-full shadow-lg hover:bg-purple-700 transition"
      >
        💬Contact Me
      </button>

      <ContactDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ContactCTA;
