import * as React from "react";
import { Container } from "./components/Container";
import { CardBackdrop } from "./components/Card/CardBackdrop";
import { ImageTile } from "./components/Tile/ImageTile";
import { Tile } from "./components/Tile/Tile";
import { LargeCard } from "./components/Card/LargeCard";

export default function Home() {
  return (
    <Container className="mt-4">
      <div className="flex flex-col md:flex-row-reverse gap-2 md:aspect-video ">
        <div>
          <CardBackdrop>
            <LargeCard
              title="No Data: Algorithmic sculptures"
              image={{
                src: "/no-data-test.jpg",
                alt: "hero",
              }}
            />
          </CardBackdrop>
        </div>
        <div className="flex-auto">
          <div className="flex flex-col gap-2 h-full aspect-square md:aspect-auto">
            <div className="flex-auto">
              <CardBackdrop>
                <ImageTile
                  image={{
                    src: "/no-data-2.jpg",
                    alt: "hero",
                  }}
                />
              </CardBackdrop>
            </div>
            <div className="flex-auto">
              <CardBackdrop>
                <ImageTile
                  image={{
                    src: "/no-data-3.jpg",
                    alt: "hero",
                  }}
                />
              </CardBackdrop>
            </div>

            <div className="">
              <Tile>
                <div className="p-4">Contact</div>
              </Tile>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
