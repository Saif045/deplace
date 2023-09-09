import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const SlideOnHover = ({
  item,
  href,
  className,
}: {
  item: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link href={href} className="f-wrap ">
      <div className={cn("f-inner", className)}>
        <div className="f-link f-face">{item}</div>
        <div className="f-link f-side">{item}</div>
      </div>
    </Link>
  );
};

export default SlideOnHover;
