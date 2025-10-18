import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
// reference to avoid some linters complaining about unused imports when motion is used solely in JSX
void motion;

function Navbar() {
  const [isDisplay, setDisplay] = useState(false);
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

  const handleLinkClick = () => {
    setDisplay(false);
  };

  return (
    <nav className="sticky top-0 z-50 navbar bg-base-100/80 backdrop-blur-lg border-b border-base-300">
      <div className="navbar-start">
        <a
          href="#Home"
          className="btn btn-ghost normal-case text-xl font-bold text-primary"
        >
          Tarun Vasireddi
        </a>
      </div>
      <motion.div
        className="navbar-center hidden lg:flex"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
        </ul>
      </motion.div>
      <div className="navbar-end">
        <a href="#Contact" className="btn btn-primary hidden lg:flex">
          Contact Me
        </a>
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setDisplay(!isDisplay)}
        >
          {isDisplay ? <X /> : <Menu />}
        </button>
      </div>

      {isDisplay && (
        <motion.div
          className="lg:hidden absolute top-16 left-0 w-full bg-base-200 shadow-lg"
          ref={navbarRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          <ul className="menu menu-vertical space-y-2 p-4">
            <li>
              <a href="#About" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#Skills" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#project" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="btn btn-primary mt-2"
                onClick={handleLinkClick}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
