"use client";
// import { useAppSelector } from "@/lib/hooks";
// import { RootState } from "@/lib/store";
import React, { HTMLAttributes } from "react";

interface SVGProps extends HTMLAttributes<any> {
  size: string;
  className: string | undefined;
  hovered: boolean;
}

function ArrowLink({ size, className, hovered }: SVGProps) {
  // const section = useAppSelector((state: RootState) => state.section);
  return (
    <div>
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M120 16C120 13.8783 119.157 11.8434 117.657 10.3431C116.157 8.84285 114.122 8 112 8H16C13.8783 8 11.8434 8.84285 10.3431 10.3431C8.84285 11.8434 8 13.8783 8 16V112C8 114.122 8.84285 116.157 10.3431 117.657C11.8434 119.157 13.8783 120 16 120H112C114.122 120 116.157 119.157 117.657 117.657C119.157 116.157 120 114.122 120 112V16ZM0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0L112 0C116.243 0 120.313 1.68571 123.314 4.68629C126.314 7.68687 128 11.7565 128 16V112C128 116.243 126.314 120.313 123.314 123.314C120.313 126.314 116.243 128 112 128H16C11.7565 128 7.68687 126.314 4.68629 123.314C1.68571 120.313 0 116.243 0 112V16ZM46.832 86.424C46.082 87.1751 45.0643 87.5975 44.0028 87.5982C42.9414 87.599 41.9231 87.178 41.172 86.428C40.4209 85.678 39.9985 84.6603 39.9978 83.5988C39.997 82.5374 40.418 81.5191 41.168 80.768L73.944 48H51.8C50.7391 48 49.7217 47.5786 48.9716 46.8284C48.2214 46.0783 47.8 45.0609 47.8 44C47.8 42.9391 48.2214 41.9217 48.9716 41.1716C49.7217 40.4214 50.7391 40 51.8 40H83.6C84.6609 40 85.6783 40.4214 86.4284 41.1716C87.1786 41.9217 87.6 42.9391 87.6 44V75.8C87.6 76.8609 87.1786 77.8783 86.4284 78.6284C85.6783 79.3786 84.6609 79.8 83.6 79.8C82.5391 79.8 81.5217 79.3786 80.7716 78.6284C80.0214 77.8783 79.6 76.8609 79.6 75.8V53.656L46.832 86.424Z"
          fill={
            "var(--bs-200)"
            // section.windowWidth < 1024
            //   ? "var(--bs-200)"
            //   : hovered
            //     ? "var(--bs-200)"
            //     : "var(--bs-900)"
          }
        />
      </svg>
    </div>
  );
}

export default ArrowLink;