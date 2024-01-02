"use client";

import { SectionEnum } from "@/lib/features/section";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React from "react";

type SectionProps = {
  title: SectionEnum;
  top: number;
  bottom: number;
};

function Section({ title, top, bottom }: SectionProps) {
  const section = useAppSelector((state: RootState) => state.section);
  // const [active, setActive] = useState<boolean>(false);

  const inactiveDiv =
    "w-16 h-1 bg-big-stone-400 group-hover:bg-big-stone-600 transition-width duration-500 group-hover:w-24";
  const activeDiv = "h-1 bg-big-stone-600 transition-width duration-500 w-24";
  const handleScroll = () => {
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="sectionContainer"
      className={"flex p-2 items-center group"}
      onClick={handleScroll}
    >
      <div
        className={section.section === title ? activeDiv : inactiveDiv}
        id="sectionBlock"
      />
      <p
        className={`ml-4 group-hover:text-big-stone-600 sm:text-sm ${
          section.section === title
            ? "text-big-stone-600"
            : "text-big-stone-400"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default Section;
