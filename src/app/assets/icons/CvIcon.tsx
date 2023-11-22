"use client";
import React, { HTMLAttributes, useState } from "react";

interface SVGProps extends HTMLAttributes<any> {
  size: string;
  className: string | undefined;
}

function CvIcon({ size, className }: SVGProps) {
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
        viewBox="0 0 112 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.375 0 0 5.375 0 12V100C0 106.625 5.375 112 12 112H100C106.625 112 112 106.625 112 100V12C112 5.375 106.625 0 100 0H12ZM36.72 33.3085C41.629 33.3085 45.9905 35.0058 49.2023 37.5513C52.1723 39.9143 53.5632 42.278 54.7767 44.3995L46.296 48.6367C45.6893 47.2455 44.9592 45.79 43.0845 44.2163C41.0225 42.5783 38.965 42.0952 37.2035 42.0952C30.297 42.0952 26.661 48.5185 26.661 55.667C26.661 65.0603 31.4512 69.722 37.2035 69.722C42.7785 69.722 45.023 65.8445 46.4735 63.3633L54.9 67.665C53.3213 70.1465 51.8065 72.5738 48.4125 74.9323C46.597 76.2048 42.4183 78.6915 36.4785 78.6915C25.1465 78.6915 16 70.4525 16 55.9675C16 43.3085 24.6038 33.3085 36.72 33.3085ZM55.5908 34.6405H66.982L75.8275 65.06L84.6087 34.6405H96L81.1553 77.4185H70.2525L55.5908 34.6408V34.6405Z"
          fill={hovered ? "var(--bs-600)" : "var(--bs-400)"}
        />
      </svg>
    </div>
  );
}

export default CvIcon;
