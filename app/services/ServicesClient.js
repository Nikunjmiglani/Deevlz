"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function ServicesClient() {
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
          Digital Services Built for Growth
        </h1>

        <p className="text-gray-400 max-w-3xl mb-8">
          We don’t sell random services. We build digital systems that help
          businesses get visibility, traffic, and customers — consistently.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-green-400 text-black px-8 py-3 rounded-full font-semibold"
        >
          Talk to Us
        </Link>
      </motion.section>

      {/* CORE SERVICES */}
      <motion.section variants={fadeUp} className="mb-28">
        <h2 className="text-3xl font-bold mb-10">Our Core Services</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <ServiceCard
            title="Web Development + SEO"
            desc="High-performance websites with SEO built into the foundation. Designed to rank, load fast, and convert visitors."
            href="/services/web-development"
            cta="Explore Web + SEO"
          />

          <ServiceCard
            title="Social Media Marketing"
            desc="Strategic content, outreach, and ads focused on engagement and inbound leads — not vanity metrics."
            href="/services/social-media"
            cta="Explore Social Media"
          />
        </div>
      </motion.section>

      {/* WHY COMBINE */}
      <motion.section variants={fadeUp} className="mb-28">
        <h2 className="text-3xl font-bold mb-6">
          Why a Combined Digital Strategy Works Better
        </h2>

        <p className="text-gray-400 max-w-3xl mb-6">
          Running services in isolation limits growth. When your website,
          search visibility, and social presence work together, results compound.
        </p>

        <ul className="space-y-3 text-gray-300 max-w-3xl">
          <li>✔ Website converts traffic into leads</li>
          <li>✔ SEO brings consistent organic visitors</li>
          <li>✔ Social media builds trust & awareness</li>
          <li>✔ Combined strategy lowers acquisition cost</li>
        </ul>
      </motion.section>

     {/* COMBO PRICING */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={stagger}
  className="max-w-6xl mx-auto px-6 mt-20 mb-20"
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

      <p className="text-3xl font-bold mb-6">₹2,499</p>

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

      <p className="text-3xl font-bold mb-6">₹3,499 upfront + 1999/mo</p>

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

      <p className="text-3xl font-bold mb-6">₹7,999 + 1,999/mo </p>

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

      {/* FINAL CTA */}
      <motion.section variants={fadeUp} className="text-center">
        <h3 className="text-2xl font-bold mb-4">
          Not sure which service you need?
        </h3>

        <p className="text-gray-400 mb-6">
          We’ll help you choose the right strategy based on your business goals.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-green-400 text-black px-10 py-3 rounded-full font-semibold"
        >
          Get a Free Consultation
        </Link>
      </motion.section>
    </motion.main>
  );
}

/* Service Card */
function ServiceCard({ title, desc, href, cta }) {
  return (
    <div className="border border-gray-700 rounded-2xl p-6 bg-black/40 hover:border-green-400 transition">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{desc}</p>

      <Link href={href} className="inline-block text-green-400 font-semibold">
        {cta} →
      </Link>
    </div>
  );
}

/* Combo Card */
function ComboCard({ title, price, points, highlight }) {
  return (
    <div
      className={`border rounded-2xl p-6 ${
        highlight
          ? "border-green-400 bg-black/60 scale-[1.05]"
          : "border-gray-700 bg-black/40"
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>

      <ul className="space-y-2 text-gray-300 text-sm mb-6">
        {points.map((p, i) => (
          <li key={i}>✔ {p}</li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="inline-block w-full text-center bg-green-400 text-black py-2 rounded-full font-semibold"
      >
        Get Started
      </Link>
    </div>
  );
}
