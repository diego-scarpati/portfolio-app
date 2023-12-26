"use client";

import React, { useEffect } from "react";
import Contact from "./Contact";
import Section from "./Section";
import { RootState } from "../../lib/store";
import { SectionEnum, setSection } from "@/lib/features/section";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

function LeftSide() {
  const section = useAppSelector((state: RootState) => state.section);
  const dispatch = useAppDispatch();
  const sections = [
    {
      title: SectionEnum.ABOUT,
      top: 0,
      bottom: section.experience,
    },
    {
      title: SectionEnum.EXPERIENCE,
      top: section.experience,
      bottom: section.projects,
    },
    {
      title: SectionEnum["SIDE PROJECTS"],
      top: section.projects,
      bottom: 9999,
    },
  ];

  useEffect(() => {
    const isActive = () => {
      if (window.scrollY < section.experience) {
        dispatch(setSection(SectionEnum.ABOUT));
      }
      if (
        window.scrollY >= section.experience &&
        window.scrollY < section.projects
      ) {
        dispatch(setSection(SectionEnum.EXPERIENCE));
      }
      if (window.scrollY >= section.projects) {
        dispatch(setSection(SectionEnum["SIDE PROJECTS"]));
      }
    };
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, [section]);

  return (
    <nav className="h-full">
      <div className="flex flex-col gap-4">
        <h1 id="name">
          {/* <h1 id="name" className="md:text-2xl lg:text-5xl"> */}
          Diego Scarpati
        </h1>
        <h3 id="role">
          {/* <h3 id="role" className="md:text-lg lg:text-4xl"> */}
          FullStack Web3 Developer
        </h3>
        <p id="about">
          {/* <p id="about" className="md:text-sm lg:text-base w-auto max-w-md"> */}
          Argentinean dev, lateral thinker, dad joke's crafter but above all, a
          great human.
        </p>
      </div>
      <div className="lg:flex flex-col mt-14 gap-2 hidden">
        {sections.map((section, index) => (
          <Section
            title={section.title}
            top={section.top}
            bottom={section.bottom}
            key={index}
          />
        ))}
      </div>
      <div className="hidden lg:flex">
        <Contact />
      </div>
    </nav>
  );
}

export default LeftSide;
