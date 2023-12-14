"use client";

import React, { useEffect, useRef } from "react";
import { setExperience, setProjects } from "../../lib/features/section";
import { useAppDispatch } from "@/lib/hooks";

type RightSideTitleProps = {
  title: string;
};

function RightSideTitle({ title }: RightSideTitleProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const handleComponentPosition = () => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      title === "Professional Experience"
        ? dispatch(setExperience(rect.top + window.scrollY - 50))
        : dispatch(setProjects(rect.top + window.scrollY - 50));
    }
  };
  useEffect(() => {
    // Call the function after the component has mounted
    handleComponentPosition();

    window.addEventListener("load", handleComponentPosition);
    // Attach a resize event listener to update the position if the window is resized
    window.addEventListener("resize", handleComponentPosition);

    return () => {
      window.removeEventListener("resize", handleComponentPosition);
      window.removeEventListener("load", handleComponentPosition);
    };
  }, []);

  return (
    <h4 className="my-10" ref={titleRef}>
      {title}
    </h4>
  );
}

export default RightSideTitle;
