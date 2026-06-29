import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Timer, UserRound } from "lucide-react";
import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
void motion;

const emailConfig = {
	serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_t8ylh06",
	templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_w38g1m7",
	publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "W-JwubgxYhhlhW-D9",
	recipientEmail:
		import.meta.env.VITE_CONTACT_EMAIL || "tharunvasireddy73@gmail.com",
	recipientName: "Tarun Vasireddi",
};

const contactEmail = emailConfig.recipientEmail;

const sectionVariants = {
	hidden: { opacity: 0, y: 32 },
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
	initial: { opacity: 0, y: 12, scale: 0.98 },
	animate: { opacity: 1, y: 0, scale: 1 },
	exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.2 } },
};

const contactLinks = [
	{
		icon: Mail,
		label: "Email",
		value: "Use the form below",
		href: contactEmail ? `mailto:${contactEmail}` : null,
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		value: "Professional updates",
		href: "https://linkedin.com/in/tarun-vasireddi-152310319",
	},
	{
		icon: Github,
		label: "GitHub",
		value: "Code and projects",
		href: "https://github.com/Tharunvasireddi",
	},
	{
		icon: Timer,
		label: "Response time",
		value: "Usually within 24 hours",
		href: null,
	},
	{
		icon: UserRound,
		label: "Availability",
		value: "Open to internships",
		href: null,
	},
];

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const [submitError, setSubmitError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);
		setSubmitError("");

		const { serviceId, templateId, publicKey, recipientEmail, recipientName } =
			emailConfig;
		const templateParams = {
			name,
			email,
			from_name: name,
			from_email: email,
			reply_to: email,
			to_name: recipientName,
			to_email: recipientEmail,
			message,
			title: `Portfolio message from ${name}`,
		};

		if (!serviceId || !templateId || !publicKey) {
			setIsSubmitting(false);
			setSubmitStatus("fallback");
			setTimeout(() => setSubmitStatus(null), 5000);
			return;
		}

		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then(() => {
				setName("");
				setEmail("");
				setMessage("");
				setSubmitStatus("success");
				setIsSubmitting(false);
				setTimeout(() => setSubmitStatus(null), 5000);
			})
			.catch((error) => {
				console.error("EmailJS send failed:", error);
				setSubmitError(
					error?.text ||
						error?.message ||
						"EmailJS rejected the request. Check service, template, public key, and recipient settings.",
				);
				setSubmitStatus("error");
				setIsSubmitting(false);
				setTimeout(() => {
					setSubmitStatus(null);
					setSubmitError("");
				}, 8000);
			});
	};

	return (
		<motion.section
			className="bg-bg py-24 sm:py-32"
			id="Contact"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="section-shell">
				<div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
					<div>
						<p className="section-kicker">Contact</p>
						<h2 className="section-title">
							Let&apos;s build something useful.
						</h2>
						<p className="section-copy mt-5">
							I am open to internships, collaboration, and conversations about
							frontend engineering. Send a note with context and I will reply
							thoughtfully.
						</p>

						<div className="mt-10 grid gap-3">
							{contactLinks.map(({ icon: _Icon, label, value, href }) => {
								const content = (
									<>
										<span className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white/[0.04] text-accent">
											{React.createElement(_Icon, {
												size: 18,
												"aria-hidden": "true",
											})}
										</span>
										<span>
											<span className="block text-sm font-semibold text-ink">
												{label}
											</span>
											<span className="block text-sm text-muted">{value}</span>
										</span>
									</>
								);

								return href ? (
									<a
										key={label}
										href={href}
										target={href.startsWith("http") ? "_blank" : undefined}
										rel={href.startsWith("http") ? "noreferrer" : undefined}
										className="premium-card flex items-center gap-4 rounded-lg p-4 transition-colors hover:border-accent/40"
									>
										{content}
									</a>
								) : (
									<div
										key={label}
										className="premium-card flex items-center gap-4 rounded-lg p-4"
									>
										{content}
									</div>
								);
							})}
						</div>
					</div>

					<div className="premium-card rounded-lg p-5 sm:p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
								<div>
									<label
										htmlFor="name"
										className="text-sm font-medium text-muted"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="Your name"
										className="mt-2 h-12 w-full rounded-md border border-line bg-bg px-4 text-ink placeholder:text-zinc-600 transition-colors focus:border-accent focus:outline-none"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="text-sm font-medium text-muted"
									>
										Email
										{contactEmail && (
											<span className="sr-only"> address {contactEmail}</span>
										)}
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="you@example.com"
										className="mt-2 h-12 w-full rounded-md border border-line bg-bg px-4 text-ink placeholder:text-zinc-600 transition-colors focus:border-accent focus:outline-none"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="message"
									className="text-sm font-medium text-muted"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="7"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									placeholder="Tell me about the role, project, or idea..."
									className="mt-2 w-full resize-none rounded-md border border-line bg-bg px-4 py-3 text-ink placeholder:text-zinc-600 transition-colors focus:border-accent focus:outline-none"
									required
								/>
							</div>

							<div className="flex justify-end">
								<AnimatedButton
									as="button"
									type="submit"
									variant="solid"
									size="lg"
									disabled={isSubmitting}
								>
									{isSubmitting ? "Sending..." : "Send Message"}
									{!isSubmitting && <Send size={18} />}
								</AnimatedButton>
							</div>
						</form>

						<AnimatePresence>
							{submitStatus === "success" && (
								<motion.div
									className="mt-5 rounded-md border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200"
									variants={alertVariants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									Message sent successfully. I&apos;ll get back to you soon.
								</motion.div>
							)}
							{submitStatus === "fallback" && (
								<motion.div
									className="mt-5 rounded-md border border-indigo-400/20 bg-indigo-400/10 p-4 text-sm text-indigo-200"
									variants={alertVariants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									Email delivery needs EmailJS service, template, and public key
									values before messages can be sent.
								</motion.div>
							)}
							{submitStatus === "error" && (
								<motion.div
									className="mt-5 rounded-md border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200"
									variants={alertVariants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									Something went wrong. Please try again later.
									{submitError && (
										<span className="mt-2 block text-red-100/80">
											{submitError}
										</span>
									)}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default Contact;
