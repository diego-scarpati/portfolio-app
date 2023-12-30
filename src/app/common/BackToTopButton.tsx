"use client";

import React, { useEffect, useState } from "react";
import ToTopIcon from "../assets/icons/ToTopIcon";

function BackToTopButton() {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const isActive = () => {
      if (window.scrollY > 20) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-2 md:right-4 w-12 h-12 flex justify-center items-center rounded-full bg-big-stone-400 transition duration-300 lg:hidden ${
        active ? "scale-100" : "scale-0"
      }`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <ToTopIcon size="32" className="" />
    </div>
  );
}

export default BackToTopButton;
