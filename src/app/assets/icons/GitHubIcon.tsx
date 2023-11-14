"use client";
import React, { HTMLAttributes, useState } from "react";

interface SVGProps extends HTMLAttributes<any> {
  size: string;
  className: string | undefined;
}

function GitHubIcon({ size, className }: SVGProps) {
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
        viewBox="0 0 432 432"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43 3h341q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H274q-7-1-7-21v-58q0-27-15-40q44-5 70.5-27t26.5-78q0-33-22-57q11-26-2-57q-18-6-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 91h-6q-12 31-2 57q-22 24-22 57q0 55 27 77.5t70 27.5q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5T56 303t8 9q15 7 24 31q1 2 2 4.5t6.5 9.5t13 10.5T130 374t30-2v36q0 20-8 21H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3z"
          fill={hovered ? "var(--bs-600)" : "var(--bs-400)"}
        />
      </svg>
    </div>
  );
}

export default GitHubIcon;
