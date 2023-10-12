"use client";
import React from "react";
import { motion } from "framer-motion";

const Review = () => {
  return (
    <div className="r-section wf-section">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="r-content">
        <div className="r-wrap-1">
          <img
            src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d0b92e20369a4438cd54272_virgolette.svg"
            alt=""
            className="virgolette"
          />

          <div className="reviewer-grid">
            <div className="reviewer-wrap">
              <div className="reviewer-inner">
                <h3 className="reviewer">WiLLiAm GIbSoN</h3>
                <h3 className="reviewer">JAmiE K. CoHen</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="r-wrap-2">
          <div className="r-inner ">
            <h4 className="review">
              Good things come to those who wait - Déplacé Maison is what has
              been missing in the modern fashion industry for years. Buy a shoe
              of high quality and design it finally happened. &nbsp;
            </h4>
            <h4 className="review">
              Déplacé Maison is a convincer for anticipation. The urban trekking
              as nevers seen before. An exceptional product that has no equal
              alongside a great team represent the brand professionally. &nbsp;{" "}
            </h4>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Review;

{
  /*
transform: translate3d(0px, 0vw, 0px) 
transform: translate3d(0px, -4.8vw, 0px) 
transform: translate3d(0px, -6vw, 0px) 
transform: translate3d(0px, -6vw, 0px) 

 */
}
