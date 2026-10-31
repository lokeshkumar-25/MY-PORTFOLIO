import React from "react";
import { motion } from "framer-motion";
import Form from "./Form";
import Footer from "./Footer"

export default function Contact() {
  return (
    <>
      <section className="contact ">

        {/*Contact Page */}

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-extrabold text-6xl text-center text-black">
            Let's Talk
          </h1>
        </motion.div>
           
          

          <div className="flex justify-center m-10">
            <p className=" w-200 font-bold text-xl text-justify text-black/70">
              I'm always open to connecting with recruiters, hiring managers,
              developers, and potential collaborators. I'm currently looking for
              full-time opportunities, internships, and entry-level software
              development roles where I can learn, contribute, and grow as a
              developer.
            </p>
          </div>
        
        {/* FORM PAGE */}
        <Form />
        <Footer/>
      </section>
    </>
  );
}
