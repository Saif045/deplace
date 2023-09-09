"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true}}
      transition={{ duration: 0.5 }}
      className="e-section ">
      <div className="e-outer flex">
        <div className="e-aside">who we are</div>
        <h2 className="e-heading eh-1 flex-1">
          An independent
          <Link href="/" className="underline mx-2">
            brand
          </Link>
          of
        </h2>
      </div>

      <div className="e-outer">
        <h2 className="e-heading">urban trekking shoes and accessories</h2>
      </div>
      <div className="e-outer">
        <h2 className="e-heading">that comes from a convergence of </h2>
      </div>
      <div className="e-outer">
        <h2 className="e-heading">arts and personalities.</h2>
      </div>
    </motion.div>
  );
};

export default QuoteSection;
