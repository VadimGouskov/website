import * as React from "react";
import { Container } from "./components/Container";

import { GridSection } from "./home/components/GridSection";
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

const workPagePath = "/work";

export default async function Home() {
  const data = await getHomeData();

  return (
    <Container className="mt-4">
      {data.series.map((work, index) => (
        <section className="mt-10" key={`work-${work.title}-${index}`}>
          <GridSection
            layout={work.layout}
            highlightSlot={
              <CardBackdrop>
                <Link href={`${workPagePath}/${work.slug}`}>
                  <LargeCard
                    title={work.title}
                    image={{
                      src: work.coverImage.src,
                      alt: work.coverImage.alt,
                    }}
                  />
                </Link>
              </CardBackdrop>
            }
          >
            <div className="flex flex-col gap-2 h-full aspect-square md:aspect-auto">
              {work.featuredImages.map((tile, imageIndex) => (
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
                <Link href={`${workPagePath}/${work.slug}`}>
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
