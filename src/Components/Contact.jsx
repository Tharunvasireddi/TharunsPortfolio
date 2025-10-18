import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Send,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
// ensure linter/build recognizes motion as used (JSX-only usage can be missed)
void motion;
import AnimatedButton from "./AnimatedButton";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const alertVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.2 } },
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = "service_t8ylh06";
    const templateId = "";
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
        setName("");
        setEmail("");
        setMessage("");
        setSubmitStatus("success");
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000); // Hide after 5s
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setSubmitStatus("error");
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000); // Hide after 5s
      });
  };

  return (
    <motion.div
      className="min-h-screen bg-base-100 py-20"
      id="Contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            Contact Me
          </h2>
          <p className="text-base-content/70 mt-4 text-lg">
            I'm open to new opportunities. Let's connect.
          </p>
        </div>
        <div className="card bg-base-200 shadow-2xl max-w-2xl mx-auto">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content/80">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="input input-bordered w-full bg-base-100"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base-content/80">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="input input-bordered w-full bg-base-100"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base-content/80">
                    Message
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  className="textarea textarea-bordered w-full bg-base-100"
                  required
                ></textarea>
              </div>
              <div className="card-actions justify-end">
                <AnimatedButton
                  as="button"
                  type="submit"
                  variant="solid"
                  size="md"
                  className={`${isSubmitting ? "loading" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={18} className="ml-2" />}
                </AnimatedButton>
              </div>
            </form>
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  className="alert alert-success shadow-lg mt-4"
                  variants={alertVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div>
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  className="alert alert-error shadow-lg mt-4"
                  variants={alertVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div>
                    <span>Something went wrong. Please try again later.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
