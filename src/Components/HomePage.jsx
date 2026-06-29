import React from "react";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import heroImage from "../Assests/hero.png";
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
					className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-line bg-card shadow-[0_28px_70px_rgba(0,0,0,0.34)] sm:max-w-[500px] lg:ml-auto lg:max-w-[460px]"
					variants={itemVariants}
					whileHover={{ y: -4 }}
					transition={{ duration: 0.24, ease: "easeOut" }}
				>
					<img
						src={heroImage}
						alt="Tarun Vasireddi"
						className="aspect-[4/5] h-auto w-full rounded-2xl object-cover object-center"
						loading="eager"
						fetchPriority="high"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default HomePage;
