import React from "react";

interface LanguageCardProps {
  language: string;
}

function LanguageCard({ language }: LanguageCardProps) {
  return (
    <div className="px-2 py-1 bg-big-stone-700 rounded-full items-center justify-center">
      <p className="flex items-center justify-center text-big-stone-100 font-medium text-xs">
        {language}
      </p>
    </div>
  );
}

export default LanguageCard;
