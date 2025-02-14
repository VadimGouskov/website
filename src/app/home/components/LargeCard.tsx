import * as React from "react";
import Image from "next/image";

type LargeCardProps = {
  alt: string;
};

export const LargeCard: React.FC<LargeCardProps> = ({ alt }) => {
  return (
    <div className="size-200">
      <div></div>
      <div className="relative h-full ">
        <Image fill src="/no-data-test.jpg" alt={alt} />
      </div>
    </div>
  );
};
