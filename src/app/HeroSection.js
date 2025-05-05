"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white text-center p-6"
    >
      <h1 className="text-3xl font-bold mb-2">Karibu Kwenye Radio Yetu</h1>
      <p className="text-lg">Radio ya kisasa yenye muonekano na ubora wa hali ya juu</p>
    </motion.div>
  );
}