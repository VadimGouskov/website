import * as React from "react";
type CardBackdropProps = {
  children: React.ReactNode;
};

export const CardBackdrop: React.FC<CardBackdropProps> = ({ children }) => {
  return (
    <div className="relative h-full hover:[&>.hover-effect]:scale-110">
      <div
        className="hover-effect bg-linear-to-tl from-blue-900 to-white absolute top-0 left-0 h-full w-full -z-10 transition-transform 
"
      ></div>
      {children}
    </div>
  );
};
