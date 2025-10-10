import React, { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Fixed typo (was preventDefualt)

    const serviceId = "service_t8ylh06";
    const templateId = "template_48fk5p2";
    const publicKey = "W-JwubgxYhhlhW-D9";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Tarun Vasireddi",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email successfully sent!", response);
        setName(""); // ✅ Clear input fields after submission
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div
      className="hero-theme-a min-h-screen p-6 flex flex-col items-center justify-center gap-6 font-ui"
      id="Contact"
    >
      <div className="grunge-overlay" />
      <div className="bg-transparent flex flex-col items-center justify-center gap-5 border rounded-lg p-4">
        <h1 className="text-og-red text-xl sm:text-3xl font-display md:text-5xl">
          Get in touch
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-8"
        >
          <div className="flex items-center justify-center gap-2 p-2">
            <label
              htmlFor="name"
              className="text-md sm:text-lg md:text-xl font-serif"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name} // ✅ Controlled component
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md p-2 text-black"
            />
          </div>
          <div className="flex items-center justify-center gap-2 p-2">
            <label
              htmlFor="email"
              className="text-md sm:text-lg md:text-xl font-serif"
            >
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email} // ✅ Controlled component
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md p-2 text-black"
            />
          </div>
          <div className="flex items-center justify-center gap-2 p-2">
            <label
              htmlFor="message"
              className="text-md sm:text-lg md:text-xl font-serif"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message} // ✅ Controlled component
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded-md p-2 text-black w-full break-words"
            ></textarea>
          </div>
          <button
            type="submit"
            value="<send/>"
            className="bg-ember hover:bg-og-red font-display text-white px-3 py-2 rounded-md sm:px-4 sm:py-2 flex gap-2 items-center"
          >
            <Send />
            Send
          </button>
        </form>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="bg-ember px-4 py-2 text-white text-sm md:text-base hover:bg-og-red rounded-lg"
          onClick={() =>
            window.open("https://github.com/Tharunvasireddi", "_blank")
          }
        >
          <Github />
        </button>
        <button
          className="bg-ember px-4 py-2 text-white text-sm md:text-base hover:bg-og-red rounded-lg"
          onClick={() =>
            window.open(
              "https://linkedin.com/in/tarun-vasireddi-152310319",
              "_blank"
            )
          }
        >
          <Linkedin />
        </button>
      </div>
    </div>
  );
}

export default Contact;
