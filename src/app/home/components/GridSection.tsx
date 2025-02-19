import { Layout } from "@/app/work/repo/types";
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
    layout === "cover-left" ? "md:flex-row" : "md:flex-row-reverse";
  return (
    <div className={`flex flex-col ${flexDirection} gap-2 md:aspect-video`}>
      <div>{highlightSlot}</div>
      <div className="flex-auto">{children}</div>
    </div>
  );
};
