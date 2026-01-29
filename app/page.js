"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaSearch, FaCode, FaBullhorn, FaHandshake, FaBolt, FaLaptopCode } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <main className="text-white">

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4 justify-center items-center mt-32 text-center px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Grow Your Business Online.
        </h1>
                                            
        <p className="text-gray-300 max-w-xl">
          Crafting success in brand growth and visibility.
        </p>

       <Link href="/contact"> <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 font-bold border cursor-pointer border-green-400 bg-green-400 text-black px-6 py-2 rounded-full"
        >
          Get started!
        </motion.button></Link>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-24 max-w-6xl mx-auto px-6"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-center mb-10">
          Services Offered
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer"
        >
          {[
            {
              title: "SEO Optimization",
              desc: "Rank higher on Google and get consistent traffic.",
              icon: <FaSearch size={32} className="text-green-400 mb-3" />,
            },
            {
              title: "Web Development",
              desc: "Fast, modern websites that convert visitors into clients.",
              icon: <FaCode size={32} className="text-green-400 mb-3" />,
            },
            {
              title: "Social Media Management",
              desc: "Grow your brand and audience across platforms.",
              icon: <FaBullhorn size={32} className="text-green-400 mb-3" />,
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="border border-gray-700 p-6 rounded-xl hover:border-green-400 transition"
            >
              {s.icon}
              <h3 className="font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* WHY DEEVLZ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-24 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-6">
          Why Deevlz?
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 cursor-pointer md:grid-cols-3 gap-6 text-left"
        >
          {[
            {
              title: "Small Business Friendly",
              desc: "No enterprise-level pricing. Built for real businesses.",
              icon: <FaHandshake size={28} className="text-green-400 mb-3" />,
            },
            {
              title: "Execution First",
              desc: "We focus on results, not buzzwords.",
              icon: <FaBolt size={28} className="text-green-400 mb-3" />,
            },
            {
              title: "Modern Tech",
              desc: "Performance-focused development & SEO best practices.",
              icon: <FaLaptopCode size={28} className="text-green-400 mb-3" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group border border-gray-700 p-5 rounded-xl hover:border-green-400 transition"
            >
              {item.icon}
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* DEEVLZ STUDENT */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-32 max-w-5xl mx-auto px-6"
      >
        <div className="border border-blue-400 rounded-2xl p-8 text-center bg-black/40">
          <h2 className="text-2xl font-bold mb-3">Are you a student?</h2>

          <p className="text-gray-300 mb-6">
            Deevlz Student is our dedicated platform for student assignments, academic help, and practical project support.
          </p>

          <Link
            href="/student"
            className="inline-block font-bold border border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-400 hover:text-black transition"
          >
            Visit Deevlz Student →
          </Link>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-32 mb-32 text-center px-6"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to grow your business?
        </h2>

        <p className="text-gray-400 mb-4">
          Let’s build something that actually works.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="font-bold cursor-pointer bg-green-400 text-black px-8 py-3 rounded-full"
        >
          Contact Deevlz
        </motion.button>
      </motion.section>

    </main>
  );
}
