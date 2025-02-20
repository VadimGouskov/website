"use client";

import { getCurrentUrl } from "@/lib/getCurrentUrl";
import { useEffect, useState } from "react";

const customLoader = ({ src, width }: { src: string; width: number }) => {
  const [currentUrl, setCurrentUrl] = useState(`${src}`);

  useEffect(() => {
    if (typeof window !== "undefined") {
      return setCurrentUrl(`${getCurrentUrl()}${src}`);
    }
  }, [src]);

  return currentUrl;
};

export default customLoader;
