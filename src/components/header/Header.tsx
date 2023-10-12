"use client";
import React from "react";
import Logo from "../Logo";
import SlideOnHover from "@/utils/SlideOnHover";
import { useWindowSize } from "usehooks-ts";
import FadeOnScroll from "@/utils/FadeOnScroll";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import useDarkSide from "@/utils/useDarkSide";

const Header = () => {
  const { width } = useWindowSize();
  const { isDarkTheme, toggleTheme } = useDarkSide();
  console.log(isDarkTheme);
  return (
    <>
      <div className="h-[46px] w-full" />
      {width > 1024 ? (
        <>
          <div className="fixed z-[98]   top-0 left-0 right-0 flex justify-between w-full max-w-screen items-center py-[6vw] px-[5vw] lg:p-[20px]">
            <Logo width={width} />

            <FadeOnScroll>
              <div className="ink-label-wrap" onClick={toggleTheme}>
                <div className="text-block-10">InK MoDe</div>
              </div>
            </FadeOnScroll>

            <SlideOnHover item="Cart" href="/" />
          </div>
        </>
      ) : (
        <MobileMenu />
      )}
    </>
  );
};

export default Header;
