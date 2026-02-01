"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Students", href: "/students" },
  { name: "Services & Prices", href: "/servicesoffered" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-4 md:px-8 py-4 relative z-50">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/devllzlogo3.png"
            width={70}
            height={70}
            alt="Deevlz logo"
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex text-white gap-9 font-mono items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="transition-all duration-300 hover:text-xl hover:font-bold hover:text-green-400"
              >
                
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
          aria-label="menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full mt-4 rounded-2xl backdrop-blur-xl bg-black/60 border border-gray-700 shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col divide-y divide-gray-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-white hover:bg-white/10 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
