import { Layout } from "@/app/work/repo/types";
import { buildImageSizes } from "@/lib/image-optimization/build-image-sizes";
import * as React from "react";

export const highlightSlotSizes = buildImageSizes({
  md: "66vw",
  default: "100vw",
});

export const childrenSlotSizes = buildImageSizes({
  md: "33vw",
  default: "100vw",
});

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
