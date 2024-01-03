import React from "react";
import LanguageCard from "./LanguageCard";
import { ExpCardProps } from "./ExperienceCard";

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
                <p className="lg:text-lg font-semibold">{employer}</p>
                <p className="lg:text-base font-semibold">{title}</p>
              </div>
              <div id="experienceDate">
                <p className="pt-1">{start + " - " + end}</p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-xs lg:text-base font-semibold">{title}</p>
        )}
      </div>
      <div id="expBrief">
        <p className="text-xs sm:text-sm">{brief}</p>
      </div>
      <div id="languages" className="flex flex-wrap sm:justify-start gap-2">
        {technologies.map((language, index) => (
          <LanguageCard key={index} language={language} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceInfo;
