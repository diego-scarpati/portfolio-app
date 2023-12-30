import React from "react";
import ExperienceInfo from "./ExperienceInfo";
import Link from "next/link";

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
    <Link
      className="flex justify-between p-5 my-2 gap-12 rounded-2xl border border-big-stone-900 hover:border-big-stone-700 hover:bg-big-stone-800 hover:shadow-[0_-1px_-3px__rgba(234, 238, 244, 0.2)]"
      id="experienceContainer"
      href={props.url}
      target="_blank"
    >
      {props.employer ? (
        <>
          <div id="experienceDate">
            <p className="text-xs lg:text-base">
              {props.start + " - " + props.end}
            </p>
          </div>
          <ExperienceInfo {...props} />
        </>
      ) : (
        <ExperienceInfo {...props} />
      )}
    </Link>
  );
}

export default ExperienceCard;
