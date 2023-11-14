import React from "react";
import Contact from "./Contact";
import Section from "./Section";
import "./LeftSide.modules.css"

function LeftSide() {
  return (
      <nav className="h-full">
        <div className="flex flex-col gap-4">
          <h1 id="name">Diego Scarpati</h1>
          <h3 id="role">FullStack Web3 Developer</h3>
          <p id="about">
            Purus arcu tempor quisque Purus arcu tempor quisque sapien velit
            commodo id.
          </p>
        </div>
        <div className=" flex flex-col mt-14 gap-2">
          <Section title="ABOUT" scrollToPosition={0}/>
          <Section title="EXPERIENCE" scrollToPosition={400}/>
          <Section title="SIDE PROJECTS" scrollToPosition={800}/>
        </div>
        <Contact />
      </nav>
  );
}

export default LeftSide;
