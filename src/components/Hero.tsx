"use client";
import React from "react";
import { motion } from "framer-motion";
import CricleArrow from "./CricleArrow";

type Props = {};

const Hero = (props: Props) => {
  const spring = ["S", "P", "R", "I", "N", "G", ","];
  const summer = ["S", "U", "M", "M", "E", "R"];
  return (
    <div>
      <section className="h-section ">
        <div className="overflow-y-hidden w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full h-full inline-flex gap-2 items-center  justify-end ">
            {spring.map((item, index) => (
              <h1 className="h-letter last:mx-6" key={index}>
                {item}
              </h1>
            ))}
          </motion.div>
        </div>

        <div className="overflow-y-hidden w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full h-full inline-flex gap-2 items-center justify-end ">
            {summer.map((item, index) => (
              <h1 className="h-letter " key={index}>
                {item}
              </h1>
            ))}
            <div className="text-block-4vw">
              COLL. <br /> 2021
            </div>
          </motion.div>
        </div>
      </section>
      <main className="i-section">
        <div className="i-wrap">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="i-container">
            <div id="wrapper-1" className="standard-wrap">
              <img
                className="i-standard"
                src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede27e188219c6c4ab2af6b_man-default.jpg"
                alt="i-man"
                sizes="(max-width: 479px) 40vw, (max-width: 991px) 34vw, 32vw"
                srcSet="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede27e188219c6c4ab2af6b_man-default-p-500.jpeg 500w, https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede27e188219c6c4ab2af6b_man-default-p-800.jpeg 800w, https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede27e188219c6c4ab2af6b_man-default-p-1080.jpeg 1080w, https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede27e188219c6c4ab2af6b_man-default.jpg 2474w"
              />
            </div>

            <div className="i-caption">
              <div className="caption-wrap">
                <div className="caption">(01)</div>
              </div>

              <div className="caption-wrap">
                <div className="caption">man</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="scotch-tape">
            <img
              src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d09026ed5102a6910070111_scotch-tape.svg"
              alt=""
              className="s-tape"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="i-container ic-2">
            <div id="wrapper-2" className="standard-wrap">
              <img
                className="i-standard"
                src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede29ef88219c8178b2be22_women-default.jpg"
                alt="i-man"
                sizes="(max-width: 479px) 40vw, (max-width: 767px) 35vw, (max-width: 991px) 34vw, 32vw"
                data-w-id="a236e8ee-2a46-901f-a26d-874bbcd704e6"
                srcSet="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede29ef88219c8178b2be22_women-default-p-500.jpeg 500w, https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede29ef88219c8178b2be22_women-default-p-800.jpeg 800w, https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede29ef88219c8178b2be22_women-default-p-1080.jpeg 1080w, https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede29ef88219c8178b2be22_women-default.jpg 2474w"
              />
            </div>

            <div className="i-caption">
              <div className="caption-wrap">
                <div className="caption">(02)</div>
              </div>
              <div className="caption-wrap">
                <div className="caption">wmns</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.3 }}>
          <CricleArrow item="Explore" href="/" arrowImg="/arrow-right.svg" />
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;
