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
        <h2 className="text-3xl font-bold text-center mb-12">Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* STARTER */}
          <motion.div variants={fadeUp} className="border border-gray-700 rounded-2xl p-6 bg-black/40">
            <FaRocket className="text-green-400 text-2xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-4">For small businesses getting online</p>

            <p className="text-3xl font-bold mb-4">₹2,999</p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ 1–5 page website</li>
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

            <p className="text-3xl font-bold mb-4">₹5,999</p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ Proper multi page website</li>
              <li>✔ Advanced SEO setup</li>
              <li>✔ Speed optimization</li>
              <li>✔ Analytics integration</li>
              <li>✔ 3 month support</li>
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

            <p className="text-3xl font-bold mb-4">₹9,999</p>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>✔ Fully Custom web app / dashboard</li>
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

      {/* SOCIAL MEDIA PRICING */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={stagger}
  className="max-w-6xl mx-auto px-6 mt-32"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
    Social Media Management Plans
  </h2>
  <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
    Structured plans designed to grow visibility, engagement, and conversions — not vanity metrics.
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

      <p className="text-3xl font-bold mb-6">₹2,999</p>

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

      <p className="text-3xl font-bold mb-6">₹4,999</p>

      <ul className="text-gray-300 text-sm space-y-3 mb-8">
        <li>✔ Content creation, editing & scheduling</li>
        <li>✔ Paid ads planning & optimization</li>
        <li>✔ Strategic outreach (DMs, calls, forms)</li>
        <li>✔ Analytics-driven growth strategy</li>
        <li>✔ Dedicated account manager</li>
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

      <p className="text-3xl font-bold mb-6">₹7,999</p>

      <ul className="text-gray-300 text-sm space-y-3 mb-8">
        <li>✔ Custom growth strategy</li>
        <li>✔ Multi-platform management</li>
        <li>✔ Advanced performance audits</li>
        <li>✔ Priority support & reporting</li>
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

{/* COMBO PRICING */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={stagger}
  className="max-w-6xl mx-auto px-6 mt-40"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
    Complete Digital Growth Packages
  </h2>
  <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
    Everything your brand needs to attract, convert, and retain customers —
    website, search visibility, and social media handled end-to-end.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* LAUNCH */}
    <motion.div
      variants={fadeUp}
      className="border border-gray-700 rounded-2xl p-6 bg-black/40 hover:border-green-400 transition"
    >
      <h3 className="text-xl font-bold mb-2">Launch</h3>
      <p className="text-gray-400 text-sm mb-6">
        Perfect for new businesses launching their online presence.
      </p>

      <p className="text-3xl font-bold mb-6">₹6,999</p>

      <ul className="text-gray-300 text-sm space-y-3 mb-8">
        <li>✔ 1–5 page responsive website</li>
        <li>✔ Basic on-page SEO setup</li>
        <li>✔ Social media account setup</li>
        <li>✔ Content & posting strategy</li>
        <li>✔ Basic analytics integration</li>
      </ul>

      <Link
        href="/contact"
        className="block w-full text-center bg-green-400 text-black font-semibold py-2 rounded-full"
      >
        Launch My Brand
      </Link>
    </motion.div>

    {/* GROWTH PRO */}
    <motion.div
      variants={fadeUp}
      className="border-2 border-green-400 rounded-2xl p-6 bg-black/60 scale-[1.05] relative"
    >
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-400 text-black text-xs font-bold px-3 py-1 rounded-full">
        BEST VALUE
      </span>

      <h3 className="text-xl font-bold mb-2 mt-2">Growth Pro</h3>
      <p className="text-gray-400 text-sm mb-6">
        For businesses focused on traffic, leads, and consistent growth.
      </p>

      <p className="text-3xl font-bold mb-6">₹8,999</p>

      <ul className="text-gray-300 text-sm space-y-3 mb-8">
        <li>✔ Multi page custom website</li>
        <li>✔ Complete on-page & technical SEO</li>
        <li>✔ Social media content creation & management</li>
        <li>✔ Paid ads & outreach strategy</li>
        <li>✔ Monthly performance reports</li>
      </ul>

      <Link
        href="/contact"
        className="block w-full text-center bg-green-400 text-black font-semibold py-2 rounded-full"
      >
        Choose Growth Pro
      </Link>
    </motion.div>

    {/* DOMINATE */}
    <motion.div
      variants={fadeUp}
      className="border border-gray-700 rounded-2xl p-6 bg-black/40 hover:border-green-400 transition"
    >
      <h3 className="text-xl font-bold mb-2">Dominate</h3>
      <p className="text-gray-400 text-sm mb-6">
        Built for brands that want authority and aggressive scaling.
      </p>

      <p className="text-3xl font-bold mb-6">₹10,999</p>

      <ul className="text-gray-300 text-sm space-y-3 mb-8">
        <li>✔ Advanced web app / dashboard</li>
        <li>✔ Full SEO (content, backlinks, audits)</li>
        <li>✔ Multi-platform social media growth</li>
        <li>✔ Conversion & funnel optimization</li>
        <li>✔ Priority support & strategy calls</li>
      </ul>

      <Link
        href="/contact"
        className="block w-full text-center bg-green-400 text-black font-semibold py-2 rounded-full"
      >
        Book Strategy Call
      </Link>
    </motion.div>

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
          Talk to DevlLz →
        </Link>
      </motion.section>

    </main>
  );
}
