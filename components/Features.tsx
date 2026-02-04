"use client";

import { motion } from "framer-motion";

const features = [
  "AI Lead Qualification",
  "Automated Client Follow-ups",
  "Smart Property Matching",
  "CRM & Platform Integration"
];

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-medium">{feature}</h3>
            <p className="mt-4 opacity-70 text-sm">
              Designed to reduce manual work and increase conversion with
              AI-driven automation.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
