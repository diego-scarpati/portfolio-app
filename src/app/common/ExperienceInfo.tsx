import React from "react";
import LanguageCard from "./LanguageCard";

interface ExpInfoProps {
  title: string;
  brief: string;
  languages: string[];
}

function ExperienceInfo({ title, brief, languages }: ExpInfoProps) {
  return (
    <div
      className="flex flex-col gap-4 justify-between"
      style={{ maxWidth: 310 }}
    >
      <div id="expTitle">
        <p>{title}</p>
      </div>
      <div id="expBrief">
        <p>{brief}</p>
      </div>
      <div id="languages" className="flex flex-wrap justify-start gap-2">
        {languages.map((language, index) => (
          <LanguageCard key={index} language={language} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceInfo;
