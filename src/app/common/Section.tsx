"use client";

import React, { useEffect, useState } from "react";
import "../globals.css";
import "./Section.modules.css";

interface SectionProps {
  title: string;
  top: number;
  bottom: number;
}

function Section({ title, top, bottom }: SectionProps) {
  const [active, setActive] = useState<boolean>(false);

  const handleScroll = () => {
    window.scrollTo({ top: top, behavior: "smooth" });
  };

  const handleVerticalScroll = () => {
    if (window.scrollY >= top && window.scrollY < bottom) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVerticalScroll);

    return () => {
      window.removeEventListener("scroll", handleVerticalScroll);
    };
  }, []);

  return (
    <div
      id="sectionContainer"
      className={"flex p-2 items-center"}
      onClick={handleScroll}
    >
      <div
        className={
          active ? "sectionBlock w-16 h-1 activeBlock" : "sectionBlock w-16 h-1"
        }
        id="sectionBlock"
      />
      <p
        className={
          active ? "sectionTitle ml-4 activeTitle" : "sectionTitle ml-4"
        }
      >
        {title}
      </p>
    </div>
  );
}

export default Section;
