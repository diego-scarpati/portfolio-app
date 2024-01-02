import React from "react";

interface LanguageCardProps {
  language: string;
}

function LanguageCard({ language }: LanguageCardProps) {
  return (
    <div className="px-2 py-1 bg-big-stone-700 rounded-full items-center justify-center">
      <p
        // style={{
        //   color: "var(--bs-100)",
        //   fontStyle: "normal",
        //   fontWeight: 400,
        //   fontSize: "12px",
        //   border: "1px",
        //   borderColor: "var(--bs-700)",
        // }}
        className="flex items-center justify-center text-big-stone-100 font-medium text-xs"
      >
        {language}
      </p>
    </div>
  );
}

export default LanguageCard;
