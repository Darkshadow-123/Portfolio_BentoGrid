import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(

        "service_hfuegzh", // ✅ Replace with your actual service ID
        "template_o9gc41h",    // ✅ Replace with your template ID
        form.current,
        {
          publicKey: "Odk6FIgSiHg7G6FNG", // ✅ Replace with your EmailJS public key
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
    <div className="text-center text-white w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="text-gray-300">Feel free to get in touch using the form below.</p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-1 w-full max-w-md p-2 rounded-2xl shadow-lg"
      >
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="title"
          placeholder="Subject"
          required
          className="p-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="p-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-white text-black px-2 py-1 rounded font-semibold hover:bg-gray-200 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
