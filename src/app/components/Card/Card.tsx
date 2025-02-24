import * as React from "react";
import NextImage from "next/image";
import { Image } from "@/app/types";

type CardProps = {
  image?: React.ComponentProps<typeof NextImage>;
  title?: string;
  description?: string;
  url?: string;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="vg-border vg-rounded">
      <div className="relative aspect-square">
        {props.image ? (
          <NextImage className="object-cover" fill {...props.image} />
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
