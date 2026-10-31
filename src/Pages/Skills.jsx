import React from "react";
import { motion } from "framer-motion";

import html from "../assets/html-5-svgrepo-com.svg";
import css from "../assets/css-3-svgrepo-com.svg";
import javascript from "../assets/js-svgrepo-com.svg";
import react from "../assets/react-svgrepo-com.svg";
import tailwind from "../assets/tailwind-svgrepo-com.svg";
import github from "../assets/github-142-svgrepo-com.svg";
import vercel from "../assets/vercel-svgrepo-com.svg";
import java from "../assets/java.png"
import springboot from "../assets/springboot.png";
import postman from "../assets/postman.png"
import mongodb from "../assets/mongodb.png"
import mysql from "../assets/mysql.png"
import docker from "../assets/docker.png"

export default function Skills() {
  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Tailwind CSS", image: tailwind },
    { name: "Java", image: java },
    { name: "Spring Boot", image: springboot },
    { name: "Postman", image: postman },
     {name: "MYSQL", image: mysql},
    {name: "MongoDB", image: mongodb},
    { name: "GitHub", image: github },
    { name: "Vercel", image: vercel },
    { name: "Docker", image: docker },

  ];

  return (
    <section className="w-full ">
      {/* ================= HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="m-10"
      >
        <h1
          className="font-extrabold text-6xl md:text-9xl m-5
                    text-black"
        >
          SKILLS
        </h1>
      </motion.div>

      {/* ================= SKILL CARDS ================= */}
      <div className="m-10 md:m-20">
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{opacity: 0,y: 80,scale: 0.8,}}
              whileInView={{opacity: 1,y: 0,scale: 1,}}
              viewport={{once: true,amount: 0.2, }}
              transition={{ duration: 0.6, delay: 0.15,}}
              whileHover={{scale: 1.08,y: -10, }}
              className=" w-40 h-40 rounded-2xl bg-white text-black
                         shadow-2xl flex flex-col items-center
                         justify-center cursor-pointer
                         transition-shadow duration-300
                         hover:shadow-black"
            >
              {/* Skill Image */}
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Skill Name */}
              <h3 className="font-bold text-xl mt-3 text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
