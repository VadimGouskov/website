import * as React from "react";
type TileProps = {
  children: React.ReactNode;
};

export const Tile: React.FC<TileProps> = ({ children }) => {
  return (
    <div className="border rounded-lg bg-white hover:bg-linear-to-br to-gray-300 from-blue-100">
      <div className="h-full">{children}</div>
    </div>
  );
};
