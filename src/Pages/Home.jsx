import React from "react";
import hero from "../assets/bg-hero.png";
import { easeOut, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const text = "DEVELOPER";

  return (
    <section
      className="home w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 
                        px-5 sm:px-8 md:px-12 lg:px-16 pt-24 pb-12 overflow-hidden relative"
    >
      {/* ------- BACKGROUND DEVELOPER TEXT ------- */}

      <h1
        className="hero lg:top-0 absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap text-[70px] sm:text-[100px] 
                     md:text-[150px] lg:text-[200px] xl:text-[250px] text-center font-extrabold pointer-events-none 
                     select-none z-0 "
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      {/* ------------- PROFILE IMAGE ------------- */}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex  relative z-10"
      >
        <motion.img
          src={hero}
          alt="Lokesh Kumar"
          className=" w-65 m-auto mx-auto sm:w-75 md:w-100 lg:w-150 max-w-full object-contain"
        />
      </motion.div>

      {/* ----------- LEFT CONTENT ------------ */}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" w-full  lg:w-1/2 relative z-10 flex justify-center lg:justify-start"
      >
        <div className=" w-full max-w-2xl mx-20 md:mx-auto lg:mx-auto  sm:mt-24 lg:mt-45">
          <h3 className="text-lg font-bold text-green-600">
            <span className="text-blue-900 text-3xl pr-2">•</span>
            Open to Full-Time Opportunities →
          </h3>

          {/* ----------- NAME ----------*/}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.1 }}
            className=" font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-black"
          >
            HI, I'm D LOKESH KUMAR
          </motion.h1>

          {/* ------------- ROLE ------------ */}

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
            className=" mt-5 font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black"
          >
            I'm a JAVA FULL STACK DEVELOPER
          </motion.h2>

          {/* ------------- DESCRIPTION ------------- */}

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 max-w-xl font-bold text-base sm:text-lg md:text-xl leading-normal text-justify text-gray-700
            "
          >
            

I build modern, responsive, secure, and scalable web applications using Java, Spring Boot, React.js, MySQL, MongoDB, and modern web technologies.
          </motion.p>

          {/* -------------- HIRE ME BUTTON --------------*/}

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              delay: 0.7,
              type: "spring",
              stiffness: 120,
            }}
            className="mt-8"
          >
            <ScrollLink to="contact" smooth={true} duration={700} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" hire-me p-3 px-6 min-w-28 bg-gray-00 text-white rounded-full
                             cursor-pointer font-bold transition-colors duration-300"
              >
                Hire Me →
              </motion.button>
            </ScrollLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
