"use client";
import ClientOnly from "@/components/ClientOnly";
import Arrow from "@/svgs/Arrow";
import Circle from "@/svgs/Circle";
import Link from "next/link";
import React from "react";

const CricleArrow = ({
  item,
  href,
  arrowDir,
}: {
  item?: string;
  href: string;
  arrowDir: string;
}) => {
  return (
    <ClientOnly>
      <div className="l-wrap ">
        {item && <div className="hover-underline">{item}</div>}
        <Link href={href} className="lerp-wrap">
          <Circle />

          <Arrow dir={arrowDir} />
        </Link>
      </div>
    </ClientOnly>
  );
};

export default CricleArrow;
