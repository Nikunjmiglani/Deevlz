"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaCrown } from "react-icons/fa";

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function WebDevelopmentClient() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={stagger}
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {/* HERO */}
      <motion.section variants={fadeUp} className="mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Web Development That Converts Visitors into Customers
        </h1>

        <p className="text-gray-400 max-w-3xl mb-8">
          We build fast, secure, and scalable websites designed for growth.
          No bloated templates. No useless animations. Just clean engineering
          and conversion-focused design.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-green-400 text-black px-6 py-3 rounded-full font-semibold"
        >
          Get Your Website
        </Link>
      </motion.section>

      {/* WHAT WE DO */}
      <motion.section variants={fadeUp} className="mb-24">
        <h2 className="text-3xl font-bold mb-6">What We Build</h2>

        <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
          <li>✔ Business & startup websites</li>
          <li>✔ Landing pages for ads & funnels</li>
          <li>✔ Dashboards & internal tools</li>
          <li>✔ SEO & performance optimized builds</li>
        </ul>
      </motion.section>

      {/* PRICING */}
      <motion.section variants={fadeUp} className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Web Development Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* STARTER */}
          <motion.div
            variants={fadeUp}
            className="border border-gray-700 rounded-2xl p-6 bg-black/40"
          >
            <FaRocket className="text-green-400 text-2xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-4">
              For small businesses getting online
            </p>

            <p className="text-3xl font-bold mb-4">₹2,999</p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ 1–5 page website</li>
              <li>✔ Basic SEO setup</li>
              <li>✔ Mobile responsive</li>
              <li>✔ Contact form</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block w-full text-center bg-green-400 text-black font-bold py-2 rounded-full"
            >
              Get Started
            </Link>
          </motion.div>

          {/* GROWTH */}
          <motion.div
            variants={fadeUp}
            className="border border-green-400 rounded-2xl p-6 bg-black/50 scale-[1.05]"
          >
            <FaCrown className="text-green-400 text-2xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Growth</h3>
            <p className="text-gray-400 text-sm mb-4">
              For serious growth-focused businesses
            </p>

            <p className="text-3xl font-bold mb-4">₹5,999</p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ Proper multi-page website</li>
              <li>✔ Advanced SEO setup</li>
              <li>✔ Speed optimization</li>
              <li>✔ Analytics integration</li>
              <li>✔ 3 months support</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block w-full text-center bg-green-400 text-black font-bold py-2 rounded-full"
            >
              Most Popular
            </Link>
          </motion.div>

          {/* SCALE */}
          <motion.div
            variants={fadeUp}
            className="border border-gray-700 rounded-2xl p-6 bg-black/40"
          >
            <FaRocket className="text-green-400 text-2xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Scale</h3>
            <p className="text-gray-400 text-sm mb-4">
              For startups & growing brands
            </p>

            <p className="text-3xl font-bold mb-4">₹9,999</p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ Fully custom web app / dashboard</li>
              <li>✔ Full SEO strategy</li>
              <li>✔ Performance audits</li>
              <li>✔ Priority support</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block w-full text-center bg-green-400 text-black font-bold py-2 rounded-full"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section variants={fadeUp} className="text-center">
        <h3 className="text-2xl font-bold mb-4">
          Want a website that actually performs?
        </h3>

        <Link
          href="/contact"
          className="inline-block bg-green-400 text-black px-8 py-3 rounded-full font-semibold"
        >
          Let’s Build It
        </Link>
      </motion.section>
    </motion.main>
  );
}
