import React from "react";
import ExperienceInfo from "./ExperienceInfo";
import "./ExperienceCard.modules.css"

interface ExpCardProps {
  date: string;
  experience: { title: string; brief: string; languages: string[] };
}

function ExperienceCard({ date, experience }: ExpCardProps) {
  return (
    <div className="flex justify-between p-5 my-2 gap-12 rounded-2xl" id="experienceContainer">
      <div id="experienceDate">
        <p style={{fontSize: "14px"}}>{date}</p>
      </div>
      <ExperienceInfo {...experience} />
    </div>
  );
}

export default ExperienceCard;
