"use client";

import React from "react";
import Contact from "./Contact";
import Section from "./Section";
import "./LeftSide.modules.css";

function LeftSide() {
  return (
    <nav className="h-full">
      <div className="flex flex-col gap-4">
        <h1 id="name" className="">
          Diego Scarpati
        </h1>
        <h3 id="role" className="">
          FullStack Web3 Developer
        </h3>
        <p id="about" className="">
          Argentinean dev, lateral thinker, dad joke's crafter but above all,
          great human.
        </p>
      </div>
      <div className="flex flex-col mt-14 gap-2">
        <Section title="ABOUT" top={0} bottom={300} />
        <Section title="EXPERIENCE" top={300} bottom={425} />
        <Section title="SIDE PROJECTS" top={425} bottom={9999} />
      </div>
      <Contact />
    </nav>
  );
}

export default LeftSide;
