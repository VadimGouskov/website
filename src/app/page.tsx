import * as React from "react";
import { LargeCard } from "./home/components/LargeCard";
import { Container } from "./components/Container";
import { CardBackdrop } from "./components/Card/CardBackdrop";
import { ImageTile } from "./components/Tile/ImageTile";

export default function Home() {
  return (
    <Container>
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
          </div>
        </div>
      </div>
    </Container>
  );
}
