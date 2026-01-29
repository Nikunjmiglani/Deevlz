"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function AboutPage() {
  return (
    <main className="text-white">

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We build digital systems that grow businesses.
        </h1>

        <p className="text-gray-400 max-w-2xl">
          Deevlz is a modern digital agency focused on performance, clarity, and long-term results —
          not vanity metrics.
        </p>
      </motion.section>

      {/* STORY */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-5xl mx-auto px-6 mt-24"
      >
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>

        <p className="text-gray-400 leading-relaxed">
          Deevlz started with a simple observation: most businesses waste money on bad websites,
          weak SEO, and agencies that sell promises instead of results.
          <br /><br />
          We decided to build something different — a lean, execution-driven agency that treats
          digital presence as a business asset, not decoration.
        </p>
      </motion.section>

      {/* VALUES */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-6xl mx-auto px-6 mt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-12">What we stand for</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Execution over talk",
              desc: "We ship fast, measure impact, and improve continuously.",
            },
            {
              title: "Business-first mindset",
              desc: "Design and tech are tools. Revenue and growth are the goal.",
            },
            {
              title: "No lock-in nonsense",
              desc: "Clients stay because of results, not contracts.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border border-gray-700 rounded-xl p-6 bg-black/40"
            >
              <h3 className="font-bold text-xl mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* HOW WE WORK */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-5xl mx-auto px-6 mt-24"
      >
        <h2 className="text-3xl font-bold mb-4">How we work</h2>

        <p className="text-gray-400 leading-relaxed">
          We don’t start with templates.
          <br /><br />
          We study your business model, customer behavior, competition, and growth targets.
          Then we design systems — websites, SEO pipelines, and marketing workflows —
          that compound value over time.
          <br /><br />
          Simple. Measurable. Scalable.
        </p>
      </motion.section>

      {/* FOUNDER SECTION */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-5xl mx-auto px-6 mt-24"
      >
        <div className="border border-gray-700 rounded-2xl p-8 bg-black/40">
          <h2 className="text-2xl font-bold mb-3">Built by engineers, not salesmen</h2>

          <p className="text-gray-400 leading-relaxed">
            Deevlz is built by developers and problem solvers who understand systems,
            performance, and scalability.
            <br /><br />
            No inflated retainers. No fake case studies. No buzzword marketing.
            Just clean engineering and honest execution.
          </p>
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
        <h2 className="text-3xl font-bold mb-4">Let’s build something serious.</h2>

        <p className="text-gray-400 mb-6">
          If you want real growth, not cosmetic changes — we should talk.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-green-400 text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Contact Deevlz
        </Link>
      </motion.section>

    </main>
  );
}
