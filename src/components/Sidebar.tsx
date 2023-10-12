import React from "react";
import SlideOnHover from "./SlideOnHover";

const Sidebar = () => {
  return (
    <div className=" sidebar hidden lg:flex">
      <div className="flex flex-col h-full w-full ">
        <SlideOnHover item="shop" href="/" className="!text-[1.5vw] " />
        <SlideOnHover item="collections" href="/" className="!text-[1.5vw] " />
        <SlideOnHover item="About" href="/" className="!text-[1.5vw] " />
      </div>
    </div>
  );
};

export default Sidebar;
