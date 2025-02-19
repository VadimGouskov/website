import * as React from "react";
import NextImage from "next/image";
import { Image } from "@/app/types";

type ImageTileProps = {
  image: Image;
};

export const ImageTile: React.FC<ImageTileProps> = ({ image }) => {
  return (
    <div className="relative h-full vg-rounded vg-border overflow-hidden">
      <NextImage
        className="object-cover"
        fill
        src={image.src}
        alt={image.alt}
      />
    </div>
  );
};
