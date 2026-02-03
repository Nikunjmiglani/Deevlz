"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBook, FaLaptopCode, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function StudentPage() {
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
          DevlLz Student
        </h1>

        <p className="text-gray-400 max-w-2xl">
          Practical academic support for students who want to understand, build, and grow — not copy and submit garbage.
        </p>

        <Link
          href="https://wa.me/919717884472"
          target="/"
          className="mt-6 inline-block bg-blue-400 text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Get academic help →
        </Link>
      </motion.section>

      {/* WHAT WE HELP WITH */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-6xl mx-auto px-6 mt-9"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          What we help you with
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Assignments",
              desc: "Concept-based guidance, structure, and clean formatting.",
              icon: <FaBook size={28} className="text-blue-400 mb-3" />,
            },
            {
              title: "Programming",
              desc: "C, C++, Java, Python, Web Dev, DBMS, DSA support.",
              icon: <FaLaptopCode size={28} className="text-blue-400 mb-3" />,
            },
            {
              title: "Projects",
              desc: "Mini & major projects with explanation and documentation.",
              icon: <FaProjectDiagram size={28} className="text-blue-400 mb-3" />,
            },
            {
              title: "Academic safety",
              desc: "No plagiarism. No risky shortcuts.",
              icon: <FaShieldAlt size={28} className="text-blue-400 mb-3" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              className="border border-gray-700 rounded-xl p-6 bg-black/40"
            >
              {item.icon}
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-5xl mx-auto px-6 mt-24"
      >
        <h2 className="text-3xl font-bold mb-6">How it works</h2>

        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>1. You contact us with your requirement.</p>
          <p>2. We review your subject, deadline, and difficulty.</p>
          <p>3. You get a clear plan, cost, and delivery timeline.</p>
          <p>4. We guide you step-by-step or build with explanation.</p>
        </div>
      </motion.section>

      {/* ETHICS SECTION */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-5xl mx-auto px-6 mt-24"
      >
        <div className="border border-gray-700 rounded-2xl p-8 bg-black/40">
          <h2 className="text-2xl font-bold mb-4">We don’t sell cheating</h2>

          <p className="text-gray-400 leading-relaxed">
            Let’s be clear.
            <br /><br />
            We don’t promote blind copying or academic fraud.
            Our goal is to help you understand concepts, structure your work properly,
            and build real skills that matter in jobs and internships.
            <br /><br />
            If you want shortcuts that destroy your learning — we’re not for you.
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
        <h2 className="text-3xl font-bold mb-4">
          Need help with an assignment or project?
        </h2>

        <p className="text-gray-400 mb-6">
          Tell us your subject, deadline, and requirements.
        </p>

        <Link
          href="https://wa.me/919717884472"
              target="_blank"
          className="inline-block bg-blue-400 text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Contact DevlLz Student→
        </Link>
      </motion.section>

    </main>
  );
}
