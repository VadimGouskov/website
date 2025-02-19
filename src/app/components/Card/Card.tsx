import * as React from "react";
import Image from "next/image";

type CardProps = {
  image?: Image;
  title?: string;
  description?: string;
  url?: string;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="vg-border vg-rounded">
      <div className="relative aspect-square">
        {props.image ? (
          <Image
            className="object-cover"
            fill
            src={props.image.src}
            alt={props.image.alt}
          ></Image>
        ) : (
          <div className="h-full bg-gray-400 flex items-center justify-center">
            No item preview
          </div>
        )}
      </div>
      <div className="p-1 pb-2">
        <div className="font-medium">{props.title}</div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
