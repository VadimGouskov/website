import * as React from "react";
import NextImage from "next/image";

type ImageTileProps = {
  image: React.ComponentProps<typeof NextImage>;
};

export const ImageTile: React.FC<ImageTileProps> = ({ image }) => {
  return (
    <div className="relative h-full vg-rounded vg-border overflow-hidden">
      <NextImage className="object-cover" fill {...image} />
    </div>
  );
};
