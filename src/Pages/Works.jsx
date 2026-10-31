import React, { useState } from "react";
import { motion } from "framer-motion";

import landing from "../assets/landingpage.png";
import weather from "../assets/weather.webp";
import fashion from "../assets/fashionpage.png";
import fashionstore from "../assets/fashionstorefull.png"

export default function Works() {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Fashion Store",
      image: fashionstore,
      description:
        "Developed a full-stack Fashion E-commerce application using Java, Spring Boot, React.js, MongoDB, and JWT authentication, featuring role-based access, product management, shopping cart, and responsive UI.",
     techstack: ["React", "Spring Boot", "MongoDB"],
        link: "https://frontend-blush-nine-75.vercel.app/",
    },
    {
      title: "Weather App",
      image: weather,
      description:
        "The app provides weather information through a clean and user-friendly interface while giving me hands-on experience with React components, API integration, and responsive design.",
     techstack: ["React", "JavaScript", "API Integration"],
        link: "https://weatherapp-wine-one.vercel.app/",
    },

    {
      title: "Plant Nursery Landing Page",
      image: landing,
      description:
        "I designed and developed a modern, responsive landing page for a plant nursery, focusing on a clean UI, smooth animations, attractive visuals, and a nature-inspired color palette.",
      techstack: ["React", "Tailwind CSS", "Framer Motion"],
        link: "https://landing-page-omega-flax-85.vercel.app/",
    },

    {
      title: "Fashion Store",
      image: fashion,
      description:
        "I worked on product listings, API integration, responsive navigation, product details, and user profile features. This project helped me improve my React, JavaScript, API integration, and frontend development skills.",
      techstack: ["React", "JavaScript", "API Integration"],
      link: "https://fashion-store-page.vercel.app/",
    },
  ];

  // Show only first 2 projects initially
  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section
      id="works"
      className=" works  w-full px-5 sm:px-8 md:px-12 lg:px-16 py-16 overflow-hidden"
    >
      {/* ================= HEADING ================= */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut",}}
        className="mb-12 sm:mb-16 lg:mb-20"
      >
        <h1
          className=" font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[150px] xl:text-[200px] text-center text-black         "
        >
          WORKS
        </h1>
      </motion.div>

      {/* ================= PROJECTS ================= */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          max-w-7xl
          mx-auto
        "
      >
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className=" cards
              w-full
             
              rounded-3xl
              shadow-2xl
              overflow-hidden
              cursor-pointer
              flex
              flex-col
            "
          >
            {/* ================= IMAGE ================= */}

            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-52
                  sm:h-56
                  md:h-52
                  lg:h-60
                  object-cover
                "
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.4,
                }}
              />
            </div>

            {/* ================= CONTENT ================= */}

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <h2
                className="
                  font-extrabold
                  text-xl
                  sm:text-2xl
                  mb-3
                  text-white
                "
              >
                {project.title}
              </h2>

              <p
                className="
                  text-justify
                  font-semibold
                  text-gray-300
                  text-sm
                  sm:text-base
                  leading-relaxed
                "
              >
                {project.description}
              </p>
<div className="flex flex-wrap gap-4 mt-3 ">
   <span className="mt-3 font-bold bg-stone-700 text-white p-2 w-auto rounded-full text-sm"> {project.techstack[0]}</span>
              <span className="mt-3 font-bold bg-stone-700 text-white p-2 w-auto rounded-full text-sm"> {project.techstack[1]}</span>
              <span className="mt-3 font-bold bg-stone-700 text-white p-2 w-auto rounded-full  text-sm"> {project.techstack[2]}</span>
</div>
             
              {/* ================= LINK ================= */}

              <div className="mt-auto pt-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="
                      px-6
                      py-2
                      bg-white
                      text-black
                      rounded-full
                      font-bold
                      cursor-pointer
                      hover:bg-gray-300
                      transition-colors
                      duration-300
                    "
                  >
                    Live Preview →
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= MORE BUTTON ================= */}

      {projects.length > 2 && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex justify-center mt-10"
        >
          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className=" px-8 py-3 bg-white text-black shadow-xl rounded-full font-bold cursor-pointer
                        hover:bg-black hover:text-white transition-colors duration-300"
          >
            {showMore ? "Show Less ↑" : "More Projects →"}
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}
