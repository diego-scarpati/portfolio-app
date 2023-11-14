"use client";

import React, { useState } from "react";
import "../globals.css";
import "./Section.modules.css"

interface SectionProps {
  title: string;
  scrollToPosition: number;
}

function Section({ title, scrollToPosition }: SectionProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const handleHoverColor = () => {
    setHovered(!hovered);
  };

  // const scrollToPosition = 

  const handleScroll = () => {
    window.scrollTo({top: scrollToPosition, behavior: "smooth"})
  }

  return (
    <div
      id="sectionContainer"
      className="flex p-2 items-center"
      onMouseEnter={handleHoverColor}
      onMouseLeave={handleHoverColor}
      // onClick={()=> handleScroll(800)}
      onClick={handleScroll}
    >
      <div className="w-16 h-1 " id="sectionBlock" />
      <p className="ml-4" id="sectionTitle">
        {title}
      </p>
    </div>
  );
}

export default Section;
