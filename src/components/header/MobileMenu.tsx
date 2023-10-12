"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../Logo";
import FadeOnScroll from "@/utils/FadeOnScroll";

const anim = {
  closed: {
    y: "-140%",
    transition: {
      delay: 1.2,
      duration: 1,
    },
    backgroundColor: "rgb(20, 20, 20)",
    z: 0,
  },
  open: {
    y: 0,
    transition: {
      duration: 1,
    },
    backgroundColor: "rgb(20, 20, 20)",
  },
  exit: {
    //  opacity: 0,
    y: "-100%",
    transition: {
      duration: 1,
    },
    backgroundColor: "rgb(20, 20, 20)",
  },
};

const staggerAnim = {
  closed: {
    transition: {
      staggerChildren: 0.12,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.12,
      staggerDirection: 1,
    },
  },
};
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const hamburgerMenuVariants = (rotateValue: number) => ({
  closed: { backgroundColor: "rgb(20, 20, 20)", rotateZ: 0 },
  open: {
    backgroundColor: "rgb(252, 249, 238)",
    rotateZ: rotateValue,
  },
});

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <MobileHeader isMenuOpen={false} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <motion.aside
        className={` text-bgg fixed top-0 right-0 left-0 h-full !overflow-y-auto hide-scroll-bar z-[100] bg-bgg`}
        variants={anim}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}>
        <motion.div variants={staggerAnim}>
          <motion.div key="header" variants={itemVariants}>
            <MobileHeader
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />{" "}
          </motion.div>

          <motion.div
            className={`flex flex-col z-[99] h-full w-screen  px-[5vw]`}>
            <motion.div className="flex flex-col flex-1 min-h-[70%]  justify-between">
              <motion.main className="py-[30px] ">
                <motion.div
                  key="tabs"
                  variants={itemVariants}
                  className="mb-[6px]">
                  <div className="nav-text">tabs</div>
                </motion.div>
                <motion.div
                  key="divider"
                  variants={itemVariants}
                  className="relative mb-[30px]">
                  <div className="bg-bgg w-full h-[1px] " />
                </motion.div>
                <div>
                  <Link
                    aria-label="nav-shop"
                    href="/category/all"
                    className="my-[10px]">
                    <motion.h2
                      variants={itemVariants}
                      key="nav-link-shop"
                      className="nav-link">
                      SHOP
                    </motion.h2>
                  </Link>
                  <Link
                    aria-label="nav-collections"
                    href="/collections"
                    className="my-[10px]">
                    <motion.h2
                      variants={itemVariants}
                      key="nav-link-collections"
                      className="nav-link">
                      collections
                    </motion.h2>
                  </Link>
                  <Link
                    aria-label="nav-brand"
                    href="/about"
                    className="my-[10px]">
                    <motion.h2
                      variants={itemVariants}
                      className="nav-link"
                      key="nav-link-about">
                      about
                    </motion.h2>
                  </Link>
                </div>

                <div className="mt-[40px] ">
                  <div className="flex w-full   max-w-[540px]  mt-[40px]">
                    <motion.div
                      key="faq"
                      variants={itemVariants}
                      className=" flex flex-col flex-1">
                      <Link
                        aria-label="nav-faq"
                        href="/faq"
                        className=" nav-f-link">
                        faq
                      </Link>

                      <Link
                        key="terms"
                        aria-label="nav-terms"
                        href="/terms-conditions"
                        className="nav-f-link">
                        terms
                      </Link>
                    </motion.div>

                    <motion.div
                      key="returns"
                      variants={itemVariants}
                      className=" flex flex-col flex-1 ">
                      <Link
                        aria-label="nav-returns"
                        href="/returns"
                        className="nav-f-link">
                        returns
                      </Link>

                      <Link
                        key="privacy"
                        aria-label="nav-privacy"
                        href="/privacy-policy"
                        className="nav-f-link">
                        privacy
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.main>
              <motion.div
                key="social-icons"
                variants={itemVariants}
                className="flex pb-[20px w-full ">
                <div className="flex w-full max-w-[540px]">
                  <motion.div
                    key="facebook"
                    variants={itemVariants}
                    className="flex flex-1 mt- gap-4">
                    <Link
                      aria-label="nav-facebook"
                      href="/facebook"
                      className=" my-[10px] ">
                      <img
                        src="https://web.archive.org/web/20220106020903im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d122534758a06139328508a_facebook.svg"
                        alt=""
                        className="w-[30px]"
                      />
                    </Link>

                    <Link
                      aria-label="nav-instagram"
                      href="/instagram"
                      className=" my-[10px] ">
                      <img
                        src="https://web.archive.org/web/20220106020903im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d122534ba030ff03c0d3799_instagram.svg"
                        alt=""
                        className="w-[30px]"
                      />
                    </Link>
                  </motion.div>

                  <motion.div
                    key="ink-mode"
                    variants={itemVariants}
                    className="relative w-full  flex-1">
                    <img
                      src="https://web.archive.org/web/20220106020903im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d1226865cf15439bcd94ea3_arrow-up.svg"
                      alt=""
                      className="w-[50px] "
                    />
                    <motion.div
                      key="ink-mode-text"
                      variants={itemVariants}
                      className="nav-f-link w-full">
                      ink mode
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            <Link
              key="email-link"
              href="https://web.archive.org/web/20220106020903/mailto:General Request?subject=info%40deplacemaison.com"
              className="w-full h-full ">
              <motion.div
                key="inquiries"
                variants={itemVariants}
                className="flex  py-[30px] my-[30px] w-full border-t-2 border-b-2 border-bgg text-6xl">
                Inquiries &nbsp;⟶ &nbsp; info@deplacemaison.com
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.aside>
    </>
  );
};

export default MobileMenu;

const MobileHeader = ({
  isMenuOpen = false,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: React.SetStateAction<boolean>) => void;
}) => {
  return (
    <nav
      className={` !z-[48] flex w-full items-center p-[6vw] pb-[2vw] justify-between transition-colors duration-300 ${
        isMenuOpen && "bg-dark text-bgg "
      } `}>
      <Logo width={1} bgIsBlack={isMenuOpen} />

      <FadeOnScroll>
        <div
          className="menu-trigger "
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <motion.div
            animate={
              isMenuOpen
                ? hamburgerMenuVariants(45).open
                : hamburgerMenuVariants(0).closed
            }
            transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
            className="menu-line left"
          />
          <motion.div
            animate={
              isMenuOpen
                ? hamburgerMenuVariants(-45).open
                : hamburgerMenuVariants(0).closed
            }
            transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
            className="menu-line"
          />
          <motion.div
            animate={
              isMenuOpen
                ? hamburgerMenuVariants(45).open
                : hamburgerMenuVariants(0).closed
            }
            transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
            className="menu-line right"
          />
        </div>
      </FadeOnScroll>

      <div className="text-[1.85vw] leading-[2vw]">CART</div>
    </nav>
  );
};
