"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-semibold">
          AI Automation<br />for Property Agencies
        </h1>
        <p className="mt-6 opacity-70">
          Intelligent systems that automate real estate workflows.
        </p>
      </motion.div>
    </section>
  );
}
