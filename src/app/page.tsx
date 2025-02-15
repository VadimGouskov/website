import * as React from "react";
import { Container } from "./components/Container";

import { GridSection } from "./home/components/GridSection";
import { CardBackdrop } from "./components/Card/CardBackdrop";
import { LargeCard } from "./components/Card/LargeCard";
import { ImageTile } from "./components/Tile/ImageTile";
import { Tile } from "./components/Tile/Tile";
import { getHomeData } from "./home/repo/getHomeData";

export default async function Home() {
  const data = await getHomeData();

  const works = data.works;
  return (
    <Container className="mt-4">
      {works.map((work, index) => (
        <section className="mt-10" key={`work-${work.title}-${index}`}>
          <GridSection
            layout={work.layout}
            highlightSlot={
              <CardBackdrop>
                <LargeCard
                  title={work.title}
                  image={{
                    src: work.coverImage.src,
                    alt: work.coverImage.alt,
                  }}
                />
              </CardBackdrop>
            }
          >
            <div className="flex flex-col gap-2 h-full aspect-square md:aspect-auto">
              {work.images.map((tile, imageIndex) => (
                <div key={`image-${imageIndex}`} className="flex-auto">
                  <CardBackdrop>
                    <ImageTile
                      image={{
                        src: tile.src,
                        alt: tile.alt,
                      }}
                    />
                  </CardBackdrop>
                </div>
              ))}
              <div className="">
                <Tile>
                  <div className="p-4">Test</div>
                </Tile>
              </div>
            </div>
          </GridSection>
        </section>
      ))}
    </Container>
  );
}
