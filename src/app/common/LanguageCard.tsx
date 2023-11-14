import React from "react";

interface LanguageCardProps {
  language: string;
}

function LanguageCard({ language }: LanguageCardProps) {
  return (
    <div className="px-2 py-1 bg-big-stone-600 rounded-full items-center justify-center">
      <p
        style={{
          color: "var(--bs-300)",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px"
        }}
        className="flex items-center justify-center"
      >
        {language}
      </p>
    </div>
  );
}

export default LanguageCard;
