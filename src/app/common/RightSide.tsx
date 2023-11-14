import React from "react";
import ExperienceCard from "./ExperienceCard";
import Bio from "./Bio";

const expMock = [
  {
    date: "NOV 2022 - SEP 2023",
    experience: {
      title: "R&D Analyst",
      brief:
        "Purus arcu tempor quisque Purus arcu tempor quisque sapien velit commodo id.",
      languages: [
        "Solidity",
        "React",
        "Angular",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "React Native",
        "JavaScript",
        "React",
        "React Native",
      ],
    },
  },
  {
    date: "NOV 2022 - SEP 2023",
    experience: {
      title: "R&D Analyst",
      brief:
        "Purus arcu tempor quisque Purus arcu tempor quisque sapien velit commodo id.",
      languages: [
        "Solidity",
        "React",
        "Angular",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "React Native",
        "JavaScript",
        "React",
        "React Native",
      ],
    },
  },
  {
    date: "NOV 2022 - SEP 2023",
    experience: {
      title: "R&D Analyst",
      brief:
        "Purus arcu tempor quisque Purus arcu tempor quisque sapien velit commodo id.",
      languages: ["JavaScript", "React", "React Native"],
    },
  },
  {
    date: "NOV 2022 - SEP 2023",
    experience: {
      title: "R&D Analyst",
      brief:
        "Purus arcu tempor quisque Purus arcu tempor quisque sapien velit commodo id.",
      languages: ["JavaScript", "React", "React Native"],
    },
  },
  {
    date: "NOV 2022 - SEP 2023",
    experience: {
      title: "R&D Analyst",
      brief:
        "Purus arcu tempor quisque Purus arcu tempor quisque sapien velit commodo id.",
      languages: [
        "Solidity",
        "React",
        "Angular",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "React Native",
        "JavaScript",
        "React",
        "React Native",
      ],
    },
  },
  {
    date: "NOV 2022 - SEP 2023",
    experience: {
      title: "R&D Analyst",
      brief:
        "Purus arcu tempor quisque Purus arcu tempor quisque sapien velit commodo id.",
      languages: [
        "Solidity",
        "React",
        "Angular",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "React Native",
        "JavaScript",
        "React",
        "React Native",
      ],
    },
  },
  {
    date: "NOV 2022 - SEP 2023",
    experience: {
      title: "R&D Analyst",
      brief:
        "Purus arcu tempor quisque Purus arcu tempor quisque sapien velit commodo id.",
      languages: ["JavaScript", "React", "React Native"],
    },
  },
  {
    date: "NOV 2022 - SEP 2023",
    experience: {
      title: "R&D Analyst",
      brief:
        "Purus arcu tempor quisque Purus arcu tempor quisque sapien velit commodo id.",
      languages: ["JavaScript", "React", "React Native"],
    },
  },
];

function RightSide() {
  return (
    <div className="w-1/2 h-full pt-24 px-16 gap-4">
      <Bio />
      <div className="mt-16">
        {expMock.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}

export default RightSide;
