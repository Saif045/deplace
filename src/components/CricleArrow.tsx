import Link from "next/link";
import React from "react";

const CricleArrow = ({
  item,
  href,
  arrowImg,
}: {
  item?: string;
  href: string;
  arrowImg: string;
}) => {
  return (
    <div className="l-wrap">
      {item && <div className="hover-underline">{item}</div>}
      <Link href={href} className="lerp-wrap ">
        <img src="/circle.svg" alt="circle" className="circle" />
        <img src={arrowImg} alt="arrow-right" className="arrow" />
      </Link>
    </div>
  );
};

export default CricleArrow;
