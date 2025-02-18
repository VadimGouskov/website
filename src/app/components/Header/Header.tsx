import * as React from "react";
import { Container } from "../Container";
import { Tile } from "../Tile/Tile";
type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <div className="flex mt-2 gap-2">
        <div className="p-4 border rounded-lg bg-white flex-auto ">
          <div className="text-xl font-thin leading-none">VADIM GOUSKOV</div>
        </div>
        <Tile>
          <div className="p-2 h-full flex justify-center items-center">
            Contact
          </div>
        </Tile>
      </div>
    </Container>
  );
};
