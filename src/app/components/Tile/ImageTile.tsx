import * as React from "react";
import Image from "next/image";

type ImageTileProps = {
  image: {
    src: string;
    alt: string;
  };
};

export const ImageTile: React.FC<ImageTileProps> = ({ image }) => {
  return (
    <div className="relative h-full vg-rounded vg-border overflow-hidden">
      <Image className="object-cover" fill src={image.src} alt={image.alt} />
    </div>
  );
};
