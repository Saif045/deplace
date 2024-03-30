"use client";
import React from "react";
import { motion } from "framer-motion";
import CricleArrow from "@/utils/CricleArrow";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClientOnly from "./ClientOnly";

const HomeCarousel = () => {
  const OPTIONS: EmblaOptionsType = {
    align: "end",
    containScroll: "trimSnaps",
    slidesToScroll: "auto",
  };

  const [emblaRef] = useEmblaCarousel(OPTIONS, []);

  return (
    <ClientOnly>
      {" "}
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container px-[1.5vw] lg:pl-[23.5vw]">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <ItemCard key={index} />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="mr-[3vw] overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.3 }}
      >
        <CricleArrow item="SHOP ALL" href="/" arrowDir="right" />
      </motion.div>
    </ClientOnly>
  );
};

export default HomeCarousel;

const ItemCard = () => {
  return (
    <motion.div className="grid-item ">
      <div className="item-link item-white">
        <div className="item-wrap iw-up">
          <img
            alt="item"
            src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ecf8747b314ba36a789e3c4_ct-army-side.jpg"
            draggable="false"
            className="item-img"
            sizes="(max-width: 479px) 48vw, (max-width: 767px) 19vw, (max-width: 991px) 27vw, 23vw"
            srcSet="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ecf8747b314ba36a789e3c4_ct-army-side-p-500.jpeg 500w, https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ecf8747b314ba36a789e3c4_ct-army-side-p-800.jpeg 800w, https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ecf8747b314ba36a789e3c4_ct-army-side-p-1080.jpeg 1080w, https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5d07507a85189203b7002a95/5ecf8747b314ba36a789e3c4_ct-army-side.jpg 1600w"
          />
        </div>
        <div className="item-wrap iw-down">
          <div className="item-label-wrap">
            <img
              src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ed0ddbec534bd9d113f6188_unisex-label.svg"
              alt=""
              className="item-label"
            />
          </div>
          <div className="item-name-wrap">
            <div className="item-season">SS/20</div>
            <div className="item-name">Cactus</div>
          </div>
          <div className="compare c-index">€&nbsp;300&nbsp;EUR</div>
          <div className="item-price">€&nbsp;180&nbsp;EUR</div>
        </div>
      </div>
    </motion.div>
  );
};
