import * as React from "react";
type TileProps = {
  children: React.ReactNode;
};

export const Tile: React.FC<TileProps> = ({ children }) => {
  return (
    <div className="flex border rounded-lg bg-white hover:bg-linear-to-br to-blue-900 from-blue-100">
      <div>{children}</div>
    </div>
  );
};
