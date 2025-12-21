import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { typography, buttonStyles } from "../utils/designSystem";

export function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(

        import.meta.env.VITE_SERVICE_ID, // ✅ Replace with your actual service ID
        import.meta.env.VITE_CLIENT_ID,    // ✅ Replace with your template ID
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // ✅ Replace with your EmailJS public key
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="text-center text-white p-4 w-full h-full flex flex-col items-center justify-center">
      <h2 className={`${typography.h2} mb-1`}>Contact Me</h2>
      <p className={`${typography.bodySmall} mb-2`}>Feel free to get in touch using the form below.</p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-1 p-1 w-full max-w-sm rounded-xl shadow-lg bg-[#0a0015]/40 backdrop-blur-xl"
      >
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <input
          type="text"
          name="title"
          placeholder="Subject"
          required
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 h-20 mb-1 resize-none"
        ></textarea>

        <button
          type="submit"
          className={buttonStyles.secondary}
        >
          Send
        </button>
      </form>
    </div>
  );
}
