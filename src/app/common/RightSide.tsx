"use client";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import Bio from "./Bio";
import * as workJson from "../assets/info/work.json";
import * as projectsJson from "../assets/info/projects.json";
import RightSideTitle from "./RightSideTitle";

function RightSide() {
  const work = workJson;
  const projects = projectsJson;

  return (
    <div className="w-full lg:w-1/2 h-full pt-24 px-16 gap-4">
      <Bio />
      <div className="mt-16">
        <RightSideTitle title={"Professional Experience"} />
        {work.data.map((exp) => (
          <ExperienceCard key={exp.title} {...exp} />
        ))}
      </div>
      <div className="my-16">
        <RightSideTitle title={"Side Projects"} />
        {projects.data.map((project) => (
          <ExperienceCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default RightSide;
