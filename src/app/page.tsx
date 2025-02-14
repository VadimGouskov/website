import * as React from "react";
import { LargeCard } from "./home/components/LargeCard";
import { Container } from "./components/Container";
import { ImageTile } from "./home/components/ImageTile";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row-reverse gap-2 md:aspect-video ">
        <div>
          <LargeCard
            title="No Data: Algorithmic sculptures"
            image={{
              src: "/no-data-test.jpg",
              alt: "hero",
            }}
          />
        </div>
        <div className="flex-auto">
          <div className="flex flex-col gap-2 h-full aspect-square md:aspect-auto">
            <div className="flex-auto">
              <ImageTile
                image={{
                  src: "/no-data-2.jpg",
                  alt: "hero",
                }}
              />
            </div>
            <div className="flex-auto">
              <ImageTile
                image={{
                  src: "/no-data-3.jpg",
                  alt: "hero",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
