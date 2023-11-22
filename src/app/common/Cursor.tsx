"use client";

import React, { useEffect, useState, useRef } from "react";
import "./Cursor.modules.css";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    // const updatePosition = (e: any) => {
    //   setPosition({ x: e.clientX, y: e.clientY });
    // };

    // document.addEventListener("mousemove", updatePosition);

    // return () => {
    //   document.removeEventListener("mousemove", updatePosition);
    // };
    document.addEventListener("mousemove", (e: MouseEvent) => {
      console.log(
        "🚀 ~ file: Cursor.tsx:26 ~ document.addEventListener ~ e:",
        e
      );
      if (cursorRef.current) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    });
  }, []);

  return (
    <div
      className="cursor"
      ref={cursorRef}
      style={{ top: position.y, left: position.x }}
    />
  );
}

export default Cursor;
