import React from "react";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import resumePDF from "../Assests/tarunresume (1).pdf";
import { motion } from "framer-motion";
void motion;
import AnimatedButton from "./AnimatedButton";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.08,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.55,
			ease: "easeOut",
		},
	},
};

function HomePage() {
	return (
		<section
			className="relative min-h-[calc(100vh-80px)] overflow-hidden py-24 sm:py-32"
			id="Home"
		>
			<motion.div
				className="section-shell grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<div>
					<motion.p
						className="mb-6 inline-flex rounded-full border border-line bg-white/[0.03] px-3 py-1 text-sm font-medium text-muted"
						variants={itemVariants}
					>
						Full Stack Developer
					</motion.p>
					<motion.h1
						className="max-w-4xl text-[clamp(4.5rem,9vw,6rem)] font-bold leading-[0.95] tracking-[0] text-ink"
						variants={itemVariants}
					>
						Tarun Vasireddi
					</motion.h1>
					<motion.p
						className="mt-8 max-w-2xl text-[clamp(1.05rem,2vw,1.25rem)] leading-8 text-muted"
						variants={itemVariants}
					>
						I build reliable, responsive web applications with React,
						JavaScript, and modern frontend systems. I care about clean
						interfaces, solid fundamentals, and solving problems with calm,
						readable code.
					</motion.p>
					<motion.div
						className="mt-10 flex flex-col gap-3 sm:flex-row"
						variants={itemVariants}
					>
						<AnimatedButton
							as="a"
							href={resumePDF}
							download="Tharun-Vasireddi-Resume.pdf"
							variant="solid"
							size="lg"
						>
							<Download size={18} />
							Resume
						</AnimatedButton>
						<AnimatedButton
							as="a"
							href="https://github.com/Tharunvasireddi"
							target="_blank"
							rel="noreferrer"
							variant="ghost"
							size="lg"
						>
							<Github size={18} />
							GitHub
						</AnimatedButton>
						<AnimatedButton
							as="a"
							href="https://linkedin.com/in/tarun-vasireddi-152310319"
							target="_blank"
							rel="noreferrer"
							variant="ghost"
							size="lg"
						>
							<Linkedin size={18} />
							LinkedIn
						</AnimatedButton>
					</motion.div>
					<motion.a
						href="#About"
						className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
						variants={itemVariants}
					>
						Explore work
						<ArrowDown size={16} />
					</motion.a>
				</div>
				<motion.div
					className="premium-card relative overflow-hidden rounded-lg p-6"
					variants={itemVariants}
					whileHover={{ y: -4 }}
					transition={{ duration: 0.24, ease: "easeOut" }}
				>
					<div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-sm text-muted">Current focus</p>
							<p className="mt-1 font-semibold text-ink">Frontend systems</p>
						</div>
						<span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
							Open to internships
						</span>
					</div>
					<div className="grid gap-4 py-6">
						{[
							["React", "Component-driven interfaces"],
							["DSA", "Problem solving practice"],
							["Tailwind", "Responsive product UI"],
						].map(([title, detail]) => (
							<div key={title} className="rounded-md border border-line bg-bg/60 p-4">
								<p className="font-semibold text-ink">{title}</p>
								<p className="mt-1 text-sm leading-6 text-muted">{detail}</p>
							</div>
						))}
					</div>
					<div className="border-t border-line pt-5">
						<p className="text-sm leading-6 text-muted">
							Designed for clarity, built for performance, and organized so
							each project can be scanned quickly.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default HomePage;
