import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
void motion;

const navItems = [
  { label: "About", href: "#About", id: "About" },
  { label: "Skills", href: "#Skills", id: "Skills" },
  { label: "Projects", href: "#project", id: "project" },
  { label: "Contact", href: "#Contact", id: "Contact" },
];

function Navbar() {
  const [isDisplay, setDisplay] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setDisplay(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["Home", ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setDisplay(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-line bg-bg/78 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "py-2 shadow-[0_12px_32px_rgba(0,0,0,0.22)]" : "py-4"
      }`}
      aria-label="Primary navigation"
    >
      <div className="section-shell flex items-center justify-between">
        <a
          href="#Home"
          className="text-sm font-semibold tracking-[0] text-ink transition-colors hover:text-white"
          aria-label="Tarun Vasireddi home"
        >
          Tarun Vasireddi
        </a>
      
      <motion.div
        className="hidden items-center gap-1 rounded-full border border-line bg-white/[0.03] p-1 lg:flex"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <ul className="flex items-center">
          {navItems.slice(0, 3).map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ${
                    activeSection === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="flex items-center gap-3">
        <AnimatedButton
          as="a"
          href="#Contact"
          variant="solid"
          size="sm"
          className="hidden lg:inline-flex"
        >
          Contact
        </AnimatedButton>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white/[0.03] text-ink lg:hidden"
          onClick={() => setDisplay(!isDisplay)}
          aria-expanded={isDisplay}
          aria-label="Toggle menu"
        >
          {isDisplay ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      </div>

      {isDisplay && (
        <motion.div
          className="absolute left-0 top-full w-full border-b border-line bg-card/96 shadow-2xl backdrop-blur-xl lg:hidden"
          ref={navbarRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          <ul className="section-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`block rounded-md px-3 py-3 text-sm font-medium ${
                    activeSection === item.id
                      ? "bg-accent/12 text-white"
                      : "text-muted"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
