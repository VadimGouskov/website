import * as React from "react";
import { Container } from "./components/Container";

import {
  GridSection,
  childrenSlotSizes,
  highlightSlotSizes,
} from "./home/components/GridSection";
import { CardBackdrop } from "./components/Card/CardBackdrop";
import { LargeCard } from "./components/Card/LargeCard";
import { ImageTile } from "./components/Tile/ImageTile";
import { Tile } from "./components/Tile/Tile";
import { getHomeData } from "./home/repo/getHomeData";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomeData();

  return {
    title: data.meta.title,
    openGraph: {
      images: data.meta.openGraphImages.map((image) => ({
        url: image.src,
        alt: image.alt,
      })),
    },
  };
}

const seriesPagePath = "/work";

export default async function Home() {
  const data = await getHomeData();

  return (
    <Container>
      {data.series.map((series, index) => (
        <section className="mt-8" key={`series-${series.title}-${index}`}>
          <GridSection
            layout={series.layout}
            highlightSlot={
              <CardBackdrop>
                <Link href={`${seriesPagePath}/${series.slug}`}>
                  <LargeCard
                    title={series.title}
                    image={{
                      src: series.coverImage.src,
                      alt: series.coverImage.alt,
                      sizes: highlightSlotSizes,
                      priority: true,
                    }}
                  />
                </Link>
              </CardBackdrop>
            }
          >
            <div className="flex flex-col gap-2 h-full aspect-square md:aspect-auto">
              {series.featuredImages.map((tile, imageIndex) => (
                <div key={`image-${imageIndex}`} className="flex-auto">
                  <CardBackdrop>
                    <ImageTile
                      image={{
                        src: tile.src,
                        alt: tile.alt,
                        sizes: childrenSlotSizes,
                        priority: true,
                      }}
                    />
                  </CardBackdrop>
                </div>
              ))}
              <div className="">
                <Link href={`${seriesPagePath}/${series.slug}`}>
                  <Tile>
                    <div className="p-4 flex justify-center items-center text-xl">
                      <span>Learn more</span>
                    </div>
                  </Tile>
                </Link>
              </div>
            </div>
          </GridSection>
        </section>
      ))}
    </Container>
  );
}
