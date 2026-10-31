import React from "react";
import aboutimg from "../assets/profile2.png";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function About() {
  return (
    <section
      id="about"
      className="about bg-black flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-5 sm:px-8 md:px-12 lg:px-20 pt-24 pb-16"
    >
    

      {/* ================= ABOUT CONTENT ================= */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        
        {/* ================= ABOUT HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h1
            className="
              font-extrabold
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-9xl
              text-center
              lg:text-left
              m-0
              text-white
            "
          >
            ABOUT
          </h1>
        </motion.div>

        {/* ================= DESCRIPTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <p
            className="
              font-bold
              text-base
              sm:text-lg
              md:text-xl
              text-justify
              mt-6
              lg:mt-8
              max-w-2xl
              mx-auto
              lg:mx-0
              leading-relaxed
              text-white/50
            "
          >
           I'm a passionate Java Full Stack Developer focused on building modern, responsive, and user-friendly web applications.
           </p>
              <p className="font-bold
              text-base
              sm:text-lg
              md:text-xl
              text-justify
              mt-1
              lg:mt-2
              max-w-2xl
              mx-auto
              lg:mx-0
              leading-relaxed
              text-white/50">
I work with Java, Spring Boot, React.js, MySQL, MongoDB, and REST APIs, with hands-on experience in developing real-world projects.
</p>


           <p className="
              font-bold
              text-base
              sm:text-lg
              md:text-xl
              text-justify
              mt-1
              lg:mt-2
              max-w-2xl
              mx-auto
              lg:mx-0
              leading-relaxed
              text-white/50
            ">
           As a fresher, I'm continuously improving my technical skills and actively seeking Java Full Stack Developer / Software Developer opportunities.</p>
            

        </motion.div>

        {/* ================= BUTTON ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            type: "spring",
            stiffness: 120,
          }}
          className="mt-8"
        >
          <ScrollLink
            to="works"
            smooth={true}
            duration={700}
            offset={-80}
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="
                p-3
                px-6
                min-w-32
                bg-white
                text-black
                shadow-xl
                rounded-full
                cursor-pointer
                font-bold
                hover:bg-white/20 hover:text-white
                transition-colors
                duration-300
              "
            >
             Explore My Works →
            </motion.button>
          </ScrollLink>
        </motion.div>
      </div>
        {/* ================= IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <motion.img
          src={aboutimg}
          alt="About Lokesh Kumar"
          className="
            w-64
            sm:w-72
            md:w-80
            lg:w-96
            max-w-full
            object-contain
            rounded-2xl
          "
          
        />
      </motion.div>
    </section>
  );
}
