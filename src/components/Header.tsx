import React from "react";
import Logo from "./Logo";
import SlideOnHover from "./SlideOnHover";

const Header = () => {
  return (
    <>
      <div className="h-[46px]" />
      <div className="fixed   top-0 left-0 flex justify-between w-full items-center py-5 px-10">
        <Logo />
        <div className="ink-label-wrap">
          <div className="text-block-10">InK MoDe</div>
        </div>
        <SlideOnHover item="Cart" href="/" className="!text-2xl" />
      </div>
    </>
  );
};

export default Header;
