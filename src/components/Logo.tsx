import React from "react";

const Logo = () => {
  return (
    <div className="logo-wrap">
      <div className="logo-inner">
        <img src="/logo.svg" alt="logo" className="h-logo" />
        <img src="/logo.svg" alt="logo" className="h-logo logo-side" />
      </div>
    </div>
  );
};

export default Logo;
