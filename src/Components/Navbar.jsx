import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

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

  return (
    <div>
      <nav className="fixed w-full bg-[rgb(30,30,30)] text-gray-100 p-4 flex justify-between items-center h-10 md:h-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif">
          Tarun Vasireddi
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:pr-28 gap-10">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setDisplay(true)}>
          <Menu />
        </button>

        {isDisplay && (
          <div
            className="md:hidden fixed top-0 right-0 h-full w-2/3  backdrop-blur-lg p-4 bg-transparent"
            ref={navbarRef}
          >
            <ul className="text-md font-serif font-semibold sm:text-xl space-y-2">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            <button
              className="absolute top-5 right-3"
              onClick={() => setDisplay(false)}
            >
              <X />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
