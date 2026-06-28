import React from "react";
import { Github, Linkedin, Download } from "lucide-react";
import resumePDF from "../Assests/tarunresume (1).pdf";
import { motion } from "framer-motion";
// some linters don't detect JSX usage of motion; keep a harmless reference
void motion;
import AnimatedButton from "./AnimatedButton";
import TextReveal from "./TextReveal";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

function HomePage() {
	return (
		<div className="hero min-h-screen bg-base-100" id="Home">
			<motion.div
				className="hero-content text-center"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
			>
				<div className="max-w-2xl">
					<h1 className="text-5xl font-bold sm:text-7xl text-base-content">
						<TextReveal text={"Hi, I'm "} className="inline-block" />
						<span className="text-primary">
							<TextReveal text={"Tarun Vasireddi"} className="inline-block" />
						</span>
					</h1>
					<p className="py-8 text-lg text-base-content/80">
						<TextReveal
							text={"Full Stack Developer | DSA Enthusiast | Problem Solver"}
							className="inline-block"
							delay={0.6}
							stagger={0.02}
						/>
					</p>
					<motion.div
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
						variants={itemVariants}
					>
						<AnimatedButton
							as="a"
							href={resumePDF}
							download="Tharun-Vasireddi-Resume.pdf"
							variant="solid"
							size="lg"
							className="btn-wide"
						>
							<Download className="mr-2" />
							Download Resume
						</AnimatedButton>
						<div className="flex gap-2">
							<AnimatedButton
								as="a"
								href="https://github.com/Tharunvasireddi"
								variant="ghost"
								size="md"
								aria-label="GitHub"
							>
								<Github />
							</AnimatedButton>
							<AnimatedButton
								as="a"
								href="https://linkedin.com/in/tarun-vasireddi-152310319"
								variant="ghost"
								size="md"
								aria-label="LinkedIn"
							>
								<Linkedin />
							</AnimatedButton>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}

export default HomePage;
