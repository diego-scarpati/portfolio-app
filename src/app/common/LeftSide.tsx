import React from "react";
import Contact from "./Contact";
import Section from "./Section";
import "./LeftSide.modules.css";

function LeftSide() {
  return (
    <nav className="h-full">
      <div className="flex flex-col gap-4">
        <h1 id="name">Diego Scarpati</h1>
        <h3 id="role">FullStack Web3 Developer</h3>
        <p id="about">
          Argentinean dev, lateral thinker, dad joke's crafter but above all,
          great human.
        </p>
      </div>
      <div className=" flex flex-col mt-14 gap-2">
        <Section title="ABOUT" top={0} bottom={400} />
        <Section title="EXPERIENCE" top={400} bottom={800} />
        <Section title="SIDE PROJECTS" top={800} bottom={9999} />
      </div>
      <Contact />
    </nav>
  );
}

export default LeftSide;
