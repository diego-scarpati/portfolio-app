import React from "react";

type RightSideTitleProps = {
  title: string;
};

function RightSideTitle({ title }: RightSideTitleProps) {
  return <h4 className="my-10">{title}</h4>;
}

export default RightSideTitle;
