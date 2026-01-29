"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="text-white">

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s talk about your business.
        </h1>

        <p className="text-gray-400 max-w-2xl">
          Tell us what you’re building. We’ll tell you what actually works.
        </p>
      </motion.section>

      {/* MAIN CONTENT */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
      >
        {/* LEFT: INFO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in touch</h2>

          <p className="text-gray-400 mb-6">
            Whether you need a website, SEO, or a full digital growth system —
            we reply within 24 hours.
          </p>

          <div className="flex items-center gap-3 mb-6">
            <FaEnvelope className="text-green-400" />
            <span className="text-gray-300">contact@deevlz.com</span>
          </div>

          <h3 className="font-bold mb-3">Follow us</h3>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-green-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-400 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-green-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-green-400 transition"><FaGithub /></a>
          </div>

          <div className="mt-10 border border-gray-700 rounded-xl p-5 bg-black/40">
            <p className="text-sm text-gray-400">
              We don’t outsource blindly. Your project is handled directly by our core team.
              No sales middlemen. No hidden fees.
            </p>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="border border-gray-700 rounded-2xl p-6 bg-black/40">
          <h3 className="text-xl font-bold mb-4">Start a project</h3>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="bg-black border border-gray-700 rounded-md px-4 py-2 outline-none focus:border-green-400"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="bg-black border border-gray-700 rounded-md px-4 py-2 outline-none focus:border-green-400"
            />

            <input
              type="text"
              name="company"
              placeholder="Company / Startup (optional)"
              className="bg-black border border-gray-700 rounded-md px-4 py-2 outline-none focus:border-green-400"
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell us about your project..."
              className="bg-black border border-gray-700 rounded-md px-4 py-2 outline-none focus:border-green-400"
            />

            <button
              type="submit"
              className="bg-green-400 text-black font-bold py-3 rounded-full hover:scale-105 transition"
            >
              Send message →
            </button>
          </form>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mt-32 mb-32 px-6"
      >
        <h2 className="text-3xl font-bold mb-4">Serious project?</h2>

        <p className="text-gray-400 mb-6">
          We only take on a limited number of clients to maintain quality.
        </p>

        <p className="text-green-400 font-semibold">
          Fill the form. We’ll handle the rest.
        </p>
      </motion.section>

    </main>
  );
}
