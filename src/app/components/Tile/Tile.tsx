import * as React from "react";
type TileProps = {
  children: React.ReactNode;
};

export const Tile: React.FC<TileProps> = ({ children }) => {
  return <div className="border rounded-lg hover:text-3xl">{children}</div>;
};
