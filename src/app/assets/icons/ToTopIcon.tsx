"use client";
import React, { HTMLAttributes, useState } from "react";
import "../../globals.css";

interface SVGProps extends HTMLAttributes<any> {
  size: string;
  className: string | undefined;
}

function LinkedInIcon({ size, className }: SVGProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const handleHoverColor = () => {
    setHovered(!hovered);
  };

  return (
    <div onMouseEnter={handleHoverColor} onMouseLeave={handleHoverColor}>
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 19v-7H5.483a.2.2 0 0 1-.142-.341L12 5l6.659 6.659a.2.2 0 0 1-.142.341H15v7"
          fill={"var(--bs-900)"}
        />
      </svg>
    </div>
  );
}

export default LinkedInIcon;
