import React from "react";
import ExperienceInfo from "./ExperienceInfo";
import Link from "next/link";

export interface ExpCardProps {
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
      className="flex justify-between p-5 my-2 gap-12 rounded-2xl border border-big-stone-700 bg-big-stone-800 shadow-[0_-1px_-3px__rgba(234, 238, 244, 0.2)] lg:bg-big-stone-900 lg:border-big-stone-900 lg:hover:border-big-stone-700 lg:hover:bg-big-stone-800 lg:hover:shadow-[0_-1px_-3px__rgba(234, 238, 244, 0.2)]"
      id={props.title}
      href={props.url}
      target="_blank"
    >
      <ExperienceInfo {...props} />
    </Link>
  );
}

export default ExperienceCard;
