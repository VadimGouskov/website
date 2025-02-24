import * as React from "react";
import { Container } from "../Container";
import { Tile } from "../Tile/Tile";
import Link from "next/link";
type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <div className="flex mt-2 gap-2">
        <div className="vg-border vg-rounded p-4  bg-white flex-auto ">
          <Link href={"/"} className="text-xl font-thin">
            <div className="leading-none">VADIM GOUSKOV</div>
          </Link>
        </div>
        <Tile>
          <Link href={"/contact"}>
            <div className="p-2 h-full flex justify-center items-center">
              Contact
            </div>
          </Link>
        </Tile>
      </div>
    </Container>
  );
};
