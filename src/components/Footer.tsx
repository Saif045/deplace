"use client";
import React from "react";
import CricleArrow from "@/utils/CricleArrow";
import SlideOnHover from "@/utils/SlideOnHover";

import { motion, scroll } from "framer-motion";
type Props = {};

const Footer = (props: Props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This provides smooth scrolling
    });
  };
  return (
    <div className="footer h-full w-full flex gap-[2vw]">
      <section className="f-col1">
        <div className="f-news">
          <h5 className="mb-[1vw]">SUBSCRIBE&nbsp;TO&nbsp;NEWSLETTER</h5>
          <div className="f-icon">
            <img
              src="/newsLetter-icon.svg"
              alt="f-newsltetter"
              draggable="false"
              className="newsletter"
            />
          </div>
        </div>

        <div className="f-news ">
          <div className="form-block ">
            <form className="form-wrap">
              <div className="form-content">
                <label className="form-field-2">
                  SUBSRIBE&nbsp;TO&nbsp;OUR&nbsp;NEWSLETTER
                </label>
                <input
                  type="email"
                  className="form-input-2 w-input"
                  maxLength={256}
                  name="Newsletter"
                  data-name="Newsletter"
                  aria-label="newsletter"
                  placeholder="email address"
                  id="newsletter"
                  required
                />
              </div>
              <button
                type="submit"
                data-wait="Please wait..."
                className="f-button-2 w-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="flex flex-col  justify-between  min-w-[15vw] ">
        <div className="flex-1 flex flex-col ">
          <span className="mb-[1vw]">INFO</span>
          <SlideOnHover item="FAQ" href="/" />
          <SlideOnHover item="RETURNS" href="/" />
          <SlideOnHover item="CONTACT" href="/" />
        </div>
        <div>CREDITS</div>
      </div>

      <div className="flex flex-col justify-between  min-w-[15vw] ">
        <div className="flex-1 flex flex-col ">
          <span className="mb-[1vw]">POLICY</span>
          <SlideOnHover item="Terms" href="/" />
          <SlideOnHover item="Privacy" href="/" />
          <SlideOnHover item="Cookie" href="/" />
        </div>
        <div>© 2020 déplacé maison.</div>
      </div>
      <div className="flex flex-col justify-between">
        <div
          className="flex justify-start items-start -mt-[7vw]"
          onClick={scrollToTop}>
          <CricleArrow href="" arrowImg="/arrow-up.png" />
        </div>
        <div className="flex">
          <div className="f-social-wrap">
            <img
              src="/fb-icon.svg"
              width="16"
              alt="fb-icon"
              className="f-social-icon"
            />
          </div>
          <div className="f-social-wrap">
            <img
              src="/ig-icon.svg"
              width="16"
              alt="ig-icon"
              className="f-social-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
