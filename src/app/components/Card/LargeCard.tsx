import * as React from "react";
import Image from "next/image";

type LargeCardProps = {
  title?: string;
  image: {
    src: string;
    alt: string;
  };
};

export const LargeCard: React.FC<LargeCardProps> = ({ image, title }) => {
  return (
    <div className="relative h-full aspect-square vg-rounded overflow-hidden ">
      <div className="h-full vg-border vg-rounded overflow-hidden ">
        {title && (
          <div className="p-1 text-xl bg-white ">
            <h2>{title}</h2>
          </div>
        )}
        <div className="relative h-full ">
          <Image
            className="object-cover"
            fill
            src={image.src}
            alt={image.alt}
          />
        </div>
      </div>
    </div>
  );
};
