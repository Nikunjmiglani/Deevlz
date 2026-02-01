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

export default function SocialMediaClient() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={stagger}
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {/* HERO */}
      <motion.section variants={fadeUp} className="mb-24">
        <h1 className="text-4xl font-bold mb-6">
          Social Media That Brings Leads, Not Likes
        </h1>

        <p className="text-gray-400 max-w-3xl mb-8">
          We manage content, outreach, and ads with one goal — business growth.
          No fake followers. No vanity metrics.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-green-400 text-black px-6 py-3 rounded-full font-semibold"
        >
          Start Growing
        </Link>
      </motion.section>

      {/* WHAT WE HANDLE */}
      <motion.section variants={fadeUp} className="mb-24">
        <h2 className="text-3xl font-bold mb-6">What We Handle</h2>

        <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
          <li>✔ Content creation & posting</li>
          <li>✔ Outreach & lead generation</li>
          <li>✔ Paid ads strategy</li>
          <li>✔ Analytics & reporting</li>
        </ul>
      </motion.section>

      {/* PRICING */}
      <motion.section variants={fadeUp} className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Social Media Management Plans
        </h2>

        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Structured plans designed to grow visibility, engagement, and conversions —
          not vanity metrics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* STARTER */}
          <motion.div
            variants={fadeUp}
            className="border border-gray-700 rounded-2xl p-6 bg-black/40 hover:border-green-400 transition"
          >
            <FaRocket className="text-green-400 text-2xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">
              Ideal for new brands building their online presence.
            </p>

            <p className="text-3xl font-bold mb-6">₹999</p>

            <ul className="text-gray-300 text-sm space-y-3 mb-8">
              <li>✔ Profile & account setup</li>
              <li>✔ Content ideas & posting guidance</li>
              <li>✔ Basic ad strategy</li>
              <li>✔ Initial outreach support</li>
            </ul>

            <Link
              href="/contact"
              className="block w-full text-center bg-green-400 text-black font-semibold py-2 rounded-full"
            >
              Get Started
            </Link>
          </motion.div>

          {/* GROWTH */}
          <motion.div
            variants={fadeUp}
            className="border-2 border-green-400 rounded-2xl p-6 bg-black/60 scale-[1.05] relative"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </span>

            <FaCrown className="text-green-400 text-2xl mb-4 mt-2" />
            <h3 className="text-xl font-bold mb-2">Growth</h3>
            <p className="text-gray-400 text-sm mb-6">
              For businesses that want consistent leads and engagement.
            </p>

            <p className="text-3xl font-bold mb-6">₹2,999/mo</p>

            <ul className="text-gray-300 text-sm space-y-3 mb-8">
              <li>✔ Content creation & scheduling</li>
              <li>✔ Paid ads planning & optimization</li>
              <li>✔ Strategic outreach</li>
              <li>✔ Analytics-driven growth</li>
              <li>✔ Dedicated manager</li>
            </ul>

            <Link
              href="/contact"
              className="block w-full text-center bg-green-400 text-black font-semibold py-2 rounded-full"
            >
              Choose Growth
            </Link>
          </motion.div>

          {/* SCALE */}
          <motion.div
            variants={fadeUp}
            className="border border-gray-700 rounded-2xl p-6 bg-black/40 hover:border-green-400 transition"
          >
            <FaRocket className="text-green-400 text-2xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Scale</h3>
            <p className="text-gray-400 text-sm mb-6">
              Built for startups and established brands scaling aggressively.
            </p>

            <p className="text-3xl font-bold mb-6">₹4,999/mo</p>

            <ul className="text-gray-300 text-sm space-y-3 mb-8">
              <li>✔ Custom growth strategy</li>
              <li>✔ Multi-platform management</li>
              <li>✔ Performance audits</li>
              <li>✔ Priority support</li>
            </ul>

            <Link
              href="/contact"
              className="block w-full text-center bg-green-400 text-black font-semibold py-2 rounded-full"
            >
              Talk to Us
            </Link>
          </motion.div>

        </div>
      </motion.section>
    </motion.main>
  );
}
