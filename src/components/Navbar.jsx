import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { Link as ScrollLink, Element } from "react-scroll";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Works from "../Pages/Works";
import Contact from "../Pages/Contact";

import resume from "../assets/D_LOKESH KUMAR.pdf"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", to: "home" },
    { name: "ABOUT", to: "about" },
    { name: "WORKS", to: "works" },
    { name: "SKILLS", to: "skills" },
    { name: "CONTACT", to: "contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 z-100 w-screen h-20 bg-white text-black"
      >
        <div className=" h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* ================= LOGO ================= */}

          <ScrollLink
            to="home"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer"
            onClick={closeMenu}
          >
            <h1
              className=" font-extrabold text-4xl sm:text-5xl "
            >
              LK
            </h1>
          </ScrollLink>

          {/* ================= DESKTOP NAV ================= */}

          <ul className=" hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className=" font-bold cursor-pointer px-3 py-2 rounded-full hover:bg-black transition-all duration-300
                   hover:text-white"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* ================= DESKTOP RESUME ================= */}

          <a
            href={resume}
            download="D_Lokesh_Kumar_Resume.pdf"
            className=" hidden md:flex items-center gap-2 bg-white text-black font-bold px-4 py-2 
                        cursor-pointer  hover:bg-black hover:text-white transition-colors duration-300"
          >
            <span className="border-r-2 border-black pr-3">RESUME</span>

            <ArrowDownToLine size={20} />
          </a>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className=" md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" md:hidden bg-white text-black "
          >
            <ul className="flex flex-col items-center py-4 gap-2">
              {navItems.map((item) => (
                <li key={item.to} className="w-full text-center">
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={closeMenu}
                    className=" block w-full py-3 font-bold cursor-pointer hover:bg-black transition"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}

              {/* Mobile Resume */}

              <li className="pt-2">
                <a
                  href={resume}
                  download="D_Lokesh_Kumar_Resume.pdf"
                  onClick={closeMenu}
                  className=" flex items-center gap-2 bg-white text-black shadow-2xl font-bold
                               px-5 py-3 hover:bg-black hover:text-white transition "
                >
                  <span>RESUME</span>

                  <ArrowDownToLine size={20} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.nav>

      {/* ================= HOME ================= */}

      <Element name="home">
        <section className="scroll-mt-20">
          <Home />
        </section>
      </Element>

      {/* ================= ABOUT ================= */}

      <Element name="about">
        <section className="scroll-mt-20">
          <About />
        </section>
      </Element>

      {/* ================= WORKS ================= */}

      <Element name="works">
        <section className="scroll-mt-20">
          <Works />
        </section>
      </Element>

      {/* ================= SKILLS ================= */}

      <Element name="skills">
        <section className="scroll-mt-20">
          <Skills />
        </section>
      </Element>

      {/* ================= CONTACT ================= */}

      <Element name="contact">
        <section className="scroll-mt-20">
          <Contact />
        </section>
      </Element>
    </>
  );
}
