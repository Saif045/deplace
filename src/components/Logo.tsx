import React from "react";

const Logo = ({ width, bgIsBlack }: { width: number; bgIsBlack?: boolean }) => {
  return (
    <>
      {width > 1024 ? (
        <div className="logo-wrap">
          <div className="logo-inner">
            <img src="/logo.svg" alt="logo" className="h-logo" />
            <img src="/logo.svg" alt="logo" className="h-logo logo-side" />
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
    </>
  );
};

export default Logo;
