"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={stagger}
      className="mt-32 backdrop-blur-md bg-black/40 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4 text-sm text-gray-400">

        {/* BRAND */}
        <motion.div variants={fadeUp}>
          <h3 className="text-white text-lg font-bold mb-3">DevLLz</h3>
          <p className="mb-5 leading-relaxed">
            Web Development, SEO & Social Media services focused on
            <span className="text-gray-300"> real business growth</span>
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" />
              <a
                href="mailto:Deevlz.info@gmail.com"
                className="hover:text-green-400 transition"
              >
                Deevlz.info@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400" />
              <a
                href="https://wa.me/919519517579"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* SERVICES */}
        <motion.div variants={fadeUp}>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/services/web-development" className="hover:text-green-400 transition">
                Web Development & SEO
              </Link>
            </li>
            <li>
              <Link href="/services/social-media" className="hover:text-green-400 transition">
                Social Media Marketing
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-green-400 transition">
                Growth Packages
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* COMPANY */}
        <motion.div variants={fadeUp}>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="hover:text-green-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-green-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* LEGAL */}
        <motion.div variants={fadeUp}>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/privacy-policy" className="hover:text-green-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="hover:text-green-400 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </motion.div>

      </div>

      {/* BOTTOM BAR */}
      <motion.div
        variants={fadeUp}
        className="border-t border-white/10 py-4 text-center text-xs text-gray-500"
      >
        © {new Date().getFullYear()} DevLLz. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
