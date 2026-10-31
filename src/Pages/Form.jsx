
import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function Form() {
  const form = useRef();

  // ================= WHATSAPP =================
  const sendWhatsApp = () => {
    const name = form.current.name.value;
    const email = form.current.email.value;
    const phone = form.current.phone.value;
    const message = form.current.message.value;

    const whatsappMessage = `Hello Lokesh,

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

    const whatsappURL = `https://wa.me/916369031813?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  // ================= SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsApp();
  };

  return (
    <section className="w-full px-5  sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-black">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
            Let's work{" "}
            <span className="text-black">together.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-black sm:text-base">
            Have a project, opportunity, or idea in mind?
            Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className=" lg:col-span-3 rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl sm:p-8 md:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">
                Send me a message
              </h3>

              <p className="mt-2 text-sm text-white">
                Fill out the form and I'll receive your message directly on
                WhatsApp.
              </p>
            </div>

            <form ref={form} onSubmit={handleSubmit}>

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name" required
                    className=" h-12 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white
                                placeholder:text-white/45 outline-none transition focus:border-white/30 focus:bg-white/10"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com" required
                    className=" h-12 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white
                              placeholder:text-white/45 outline-none transition focus:border-white/30 focus:bg-white/10"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div className="mt-6">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 00000 00000" required
                  className=" h-12 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white
                              placeholder:text-white/45 outline-none transition focus:border-white/30 focus:bg-white/10"
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className=" min-h-36 w-full resize-none rounded-xl border border-white/10 bg-white/10 p-4 text-sm text-white
                              placeholder:text-white/45 outline-none transition focus:border-white/30 focus:bg-white/10 "
                />
              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                {/* SEND */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className=" h-12 flex-1 rounded-xl bg-white px-6 text-sm font-semibold text-black transition
                              hover:bg-gray-200 cursor-pointer"
                >
                  Send via WhatsApp →
                </motion.button>

                {/* CLEAR */}
                <motion.button
                  type="button"
                  onClick={() => form.current.reset()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className=" h-12 rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-medium
                              text-gray-300 transition hover:bg-white/10 cursor-pointer"
                >
                  Clear
                </motion.button>

              </div>
            </form>
          </motion.div>

          {/* ================= CONNECT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div
              className=" flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/80
                          p-6 backdrop-blur-xl sm:p-8"
            >

              {/* TOP CONTENT */}
              <div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  Let's connect
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  You can also find me across these platforms. I'm always
                  open to interesting projects and collaborations.
                </p>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-10 grid grid-cols-1 gap-3">

                {/* GITHUB */}
                <motion.a
                  href="https://github.com/lokeshkumar-25"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="
                    group
                    flex
                    min-h-16
                    items-center
                    justify-between
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    px-5
                    transition
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >
                  <div>
                    <p className="text-xs text-gray-500">GitHub</p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Lokesh_Kumar_GitHub
                    </p>
                  </div>

                  <span className="text-gray-500 transition group-hover:text-white">
                    ↗
                  </span>
                </motion.a>

                {/* LINKEDIN */}
                <motion.a
                  href="https://www.linkedin.com/in/lokesh-kumar-d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="
                    group
                    flex
                    min-h-16
                    items-center
                    justify-between
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    px-5
                    transition
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >
                  <div>
                    <p className="text-xs text-gray-500">LinkedIn</p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Lokesh_Kumar_LinkedIn
                    </p>
                  </div>

                  <span className="text-gray-500 transition group-hover:text-white">
                    ↗
                  </span>
                </motion.a>

                {/* EMAIL */}
                <motion.a
                  href="mailto:lokeshkumard252@gmail.com"
                  whileHover={{ x: 5 }}
                  className="
                    group
                    flex
                    min-h-16
                    items-center
                    justify-between
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    px-5
                    transition
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="mt-1 break-all text-sm font-medium text-white">
                      lokeshkumard252@gmail.com
                    </p>
                  </div>

                  <span className="ml-3 text-gray-500 transition group-hover:text-white">
                    ↗
                  </span>
                </motion.a>

                {/* WHATSAPP */}
                <motion.a
                  href="https://wa.me/916369031813"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="
                    group
                    flex
                    min-h-16
                    items-center
                    justify-between
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    px-5
                    transition
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="mt-1 text-sm font-medium text-white">
                      +91 63690 31813
                    </p>
                  </div>

                  <span className="text-gray-500 transition group-hover:text-white">
                    ↗
                  </span>
                </motion.a>

              </div>

              {/* BOTTOM */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-xs text-white/70">
                  Usually responds within 24 hours.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

