"use client";

import { getCurrentUrl } from "@/lib/getCurrentUrl";
import { useEffect, useState } from "react";

const customLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) => {
  const [currentUrl, setCurrentUrl] = useState(`${src}`);

  useEffect(() => {
    if (typeof window !== "undefined") {
      return setCurrentUrl(
        `${getCurrentUrl()}${src}?w=${width}&q=${quality || 75}`
      );
    }
  }, [src]);

  return currentUrl;
};

export default customLoader;
