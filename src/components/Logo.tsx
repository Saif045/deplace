import React from "react";
import ClientOnly from "./ClientOnly";
import LogoSvg from "@/svgs/LogoSvg";

const Logo = ({ width, bgIsBlack }: { width: number; bgIsBlack?: boolean }) => {
  return (
    <ClientOnly>
      {width > 1024 ? (
        <div className="logo-wrap">
          <div className="logo-inner">
            <div className="h-logo ">
              <LogoSvg />
            </div>
            <div className="h-logo logo-side">
              <LogoSvg />
            </div>
          </div>
        </div>
      ) : (
        <>
          {bgIsBlack ? (
            <img
              src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d10f270fdbb4861e57bff12_de-logotype-white.svg"
              alt=""
              className="m-logo white "
            />
          ) : (
            <img
              src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d10e5bbc661d246c0117a60_de-logotype.svg"
              alt=""
              className="m-logo black "
            />
          )}
        </>
      )}
    </ClientOnly>
  );
};

export default Logo;
