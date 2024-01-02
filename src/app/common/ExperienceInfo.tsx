import React from "react";
import LanguageCard from "./LanguageCard";
import { ExpCardProps } from "./ExperienceCard";

// interface ExpInfoProps {
//   employer?: string;
//   title: string;
//   brief: string;
//   technologies: string[];
// }

function ExperienceInfo({
  employer,
  title,
  brief,
  technologies,
  start,
  end,
}: ExpCardProps) {
  return (
    <div className="flex flex-col gap-4 justify-between w-full">
      <div id="expTitle" className="w-full">
        {employer ? (
          <>
            <div className="flex flex-row justify-between pr-8">
              <div id="employer">
                <p className="text-xs lg:text-xl font-semibold">{employer}</p>
                <p className="text-xs lg:text-base font-semibold">{title}</p>
              </div>
              <div
                id="experienceDate"
                // className=" bg-big-stone-50 flex items-center"
              >
                <p className="text-xs pt-1">{start + " - " + end}</p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-xs lg:text-lg font-semibold">{title}</p>
        )}
      </div>
      <div id="expBrief">
        <p className="text-sm">{brief}</p>
      </div>
      <div id="languages" className="flex flex-wrap justify-start gap-2">
        {technologies.map((language, index) => (
          <LanguageCard key={index} language={language} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceInfo;
