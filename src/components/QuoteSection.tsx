"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <motion.div className="e-section ">
      <div className="e-outer flex">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="e-aside">
          who we are
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="e-heading eh-1 flex-1">
          An independent
          <Link href="/" className="underline mx-2">
            brand
          </Link>
          of
        </motion.div>
      </div>

      <div className="e-outer  ">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="e-heading">
          urban trekking shoes and accessories
        </motion.div>
      </div>
      <div className="e-outer">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="e-heading">
          that comes from a convergence of
        </motion.div>
      </div>
      <div className="e-outer">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="e-heading">
          arts and personalities.
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuoteSection;
