"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

type Props = {};

const ScrollMarquee = (props: Props) => {
  return (
    <section className="c-section">
      <motion.section
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Marquee
          autoFill
          speed={100}
          className="hide-scroll-bar c-marquee-item"
        >
          <div className="c-marquee-content">
            <h1 className="c-marquee-heading">
              &nbsp;&nbsp;deplace shop&nbsp;&nbsp;
              <span className="c-marquee-span">·</span>
              &nbsp;&nbsp;do not scroll&nbsp;&nbsp; ·{" "}
            </h1>
          </div>
        </Marquee>
      </motion.section>
    </section>
  );
};

export default ScrollMarquee;
