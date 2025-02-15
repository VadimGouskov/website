import * as React from "react";

type GridSectionProps = {
  highlightSlot?: React.ReactNode;
  children?: React.ReactNode;
};

export const GridSection: React.FC<GridSectionProps> = ({
  highlightSlot,
  children,
}) => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-2 md:aspect-video ">
      <div>{highlightSlot}</div>
      <div className="flex-auto">{children}</div>
    </div>
  );
};
