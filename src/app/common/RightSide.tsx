import React from "react";
import ExperienceCard from "./ExperienceCard";
import Bio from "./Bio";
import * as workJson from "../assets/info/work.json";
import * as projectsJson from "../assets/info/projects.json";

function RightSide() {
  const work = workJson;
  const projects = projectsJson;

  return (
    <div className="w-1/2 h-full pt-24 px-16 gap-4">
      <Bio />
      <div className="mt-16">
        {work.data.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
      <div className="mt-16">
        {projects.data.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}

export default RightSide;
