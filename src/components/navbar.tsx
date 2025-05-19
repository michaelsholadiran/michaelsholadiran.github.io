"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/constants/data";
import { fadeInUp } from "@/utils/motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Michael Sholadiran
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-2">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`${link.name} Profile`}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
