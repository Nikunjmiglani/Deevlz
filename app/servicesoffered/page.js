"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaSearch, FaCode, FaBullhorn, FaRocket, FaCrown } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function ServicesPage() {
  return (
    <main className="text-white">

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="min-h-[55vh] flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Services & Pricing
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Transparent pricing. Real execution. No hidden charges.
        </p>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-6xl mx-auto px-6 mt-10"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Core Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "SEO Optimization",
              desc: "Technical SEO, on-page optimization, keyword research, site audits.",
              icon: <FaSearch className="text-green-400 text-3xl mb-3" />,
            },
            {
              title: "Web Development",
              desc: "Fast, modern websites using Next.js, SEO optimized & mobile-first.",
              icon: <FaCode className="text-green-400 text-3xl mb-3" />,
            },
            {
              title: "Social Media Management",
              desc: "Content strategy, posting schedule, growth optimization.",
              icon: <FaBullhorn className="text-green-400 text-3xl mb-3" />,
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              className="border border-gray-700 rounded-xl p-6 bg-black/40"
            >
              {s.icon}
              <h3 className="font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PRICING */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-6xl mx-auto px-6 mt-32"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* STARTER */}
          <motion.div variants={fadeUp} className="border border-gray-700 rounded-2xl p-6 bg-black/40">
            <FaRocket className="text-green-400 text-2xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-4">For small businesses getting online</p>

            <p className="text-3xl font-bold mb-4">₹7,999</p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ 1–3 page website</li>
              <li>✔ Basic SEO setup</li>
              <li>✔ Mobile responsive</li>
              <li>✔ Contact form</li>
            </ul>

            <Link href="/contact" className="inline-block w-full text-center bg-green-400 text-black font-bold py-2 rounded-full">
              Get Started
            </Link>
          </motion.div>

          {/* GROWTH */}
          <motion.div variants={fadeUp} className="border border-green-400 rounded-2xl p-6 bg-black/50 scale-[1.03]">
            <FaCrown className="text-green-400 text-2xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Growth</h3>
            <p className="text-gray-400 text-sm mb-4">For serious growth-focused businesses</p>

            <p className="text-3xl font-bold mb-4">₹19,999</p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ 5–8 page website</li>
              <li>✔ Advanced SEO setup</li>
              <li>✔ Speed optimization</li>
              <li>✔ Analytics integration</li>
              <li>✔ 1 month support</li>
            </ul>

            <Link href="/contact" className="inline-block w-full text-center bg-green-400 text-black font-bold py-2 rounded-full">
              Most Popular
            </Link>
          </motion.div>

          {/* SCALE */}
          <motion.div variants={fadeUp} className="border border-gray-700 rounded-2xl p-6 bg-black/40">
            <FaRocket className="text-green-400 text-2xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Scale</h3>
            <p className="text-gray-400 text-sm mb-4">For startups & brands</p>

            <p className="text-3xl font-bold mb-4">₹39,999+</p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ Custom web app / dashboard</li>
              <li>✔ Full SEO strategy</li>
              <li>✔ Social media setup</li>
              <li>✔ Performance audits</li>
              <li>✔ Priority support</li>
            </ul>

            <Link href="/contact" className="inline-block w-full text-center bg-green-400 text-black font-bold py-2 rounded-full">
              Contact Us
            </Link>
          </motion.div>

        </div>
      </motion.section>

      {/* COMBOS */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-5xl mx-auto px-6 mt-32"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Combo Packages</h2>

        <div className="space-y-4 text-gray-400">
          <p>🔥 Website + SEO (3 months) → <span className="text-white font-bold">₹24,999</span></p>
          <p>🔥 Website + SEO + Social Media → <span className="text-white font-bold">₹34,999</span></p>
          <p>🔥 Full Digital Setup (Startup Kit) → <span className="text-white font-bold">₹49,999</span></p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mt-32 mb-32 px-6"
      >
        <h2 className="text-3xl font-bold mb-4">Not sure what you need?</h2>
        <p className="text-gray-400 mb-6">We’ll suggest the right plan after understanding your business.</p>

        <Link
          href="/contact"
          className="inline-block bg-green-400 text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Talk to Deevlz →
        </Link>
      </motion.section>

    </main>
  );
}
