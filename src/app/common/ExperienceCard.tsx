import React from "react";
import ExperienceInfo from "./ExperienceInfo";
import "./ExperienceCard.modules.css";

interface ExpCardProps {
  employer?: string;
  start?: string;
  end?: string;
  title: string;
  brief: string;
  technologies: string[];
  url: string;
}

function ExperienceCard({ ...props }: ExpCardProps) {
  return (
    <div
      className="flex justify-between p-5 my-2 gap-12 rounded-2xl"
      id="experienceContainer"
    >
      {props.employer ? (
        <>
          <div id="experienceDate">
            <p style={{ fontSize: "14px" }}>{props.start + " " + props.end}</p>
          </div>
          <ExperienceInfo {...props} />
        </>
      ) : (
        <ExperienceInfo {...props} />
      )}
    </div>
  );
}

export default ExperienceCard;
