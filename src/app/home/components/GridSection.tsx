import * as React from "react";

type GridSectionProps = {
  highlightSlot?: React.ReactNode;
  children?: React.ReactNode;
  layout?: Layout;
};

export const GridSection: React.FC<GridSectionProps> = ({
  highlightSlot,
  children,
  layout,
}) => {
  const flexDirection =
    layout === "cover-left" ? "flex-row" : "flex-row-reverse";
  return (
    <div className={`flex flex-col md:${flexDirection} gap-2 md:aspect-video`}>
      <div>{highlightSlot}</div>
      <div className="flex-auto">{children}</div>
    </div>
  );
};
