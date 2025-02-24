interface BreakPoints extends Record<string, string | undefined> {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
  default: string;
}

const breakpoints: BreakPoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  default: "0px",
};

export const buildImageSizes = (sizesBreakpoints: BreakPoints) => {
  const sizes = Object.entries(sizesBreakpoints)
    .map(([key, value]) => {
      if (key === "default") {
        return value;
      }

      const width = breakpoints[key];
      return `(min-width: ${width}) ${value}`;
    })
    .join(", ");

  return sizes;
};
