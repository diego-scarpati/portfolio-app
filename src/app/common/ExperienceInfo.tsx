import React from "react";
import LanguageCard from "./LanguageCard";

interface ExpInfoProps {
  employer?: string;
  title: string;
  brief: string;
  technologies: string[];
}

function ExperienceInfo({
  employer,
  title,
  brief,
  technologies,
}: ExpInfoProps) {
  return (
    <div
      className="flex flex-col gap-4 justify-between"
      style={{ maxWidth: employer ? 310 : "100%" }}
    >
      <div id="expTitle">
        {employer && <p className="text-xl">{employer}</p>}
        <p className="text-xl">{title}</p>
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
