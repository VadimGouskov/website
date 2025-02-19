import * as React from "react";
import { getAllSeries } from "../repo/getAllSeries";
import { getSeries } from "../repo/getSeries";
import { Container } from "@/app/components/Container";
import Link from "next/link";
import { Markdown } from "@/app/components/Markdown/Markdown";
import { getAllWorks } from "../repo/getAllWorks";
import { Card } from "@/app/components/Card/Card";
import { GridSection } from "@/app/home/components/GridSection";
import { LargeCard } from "@/app/components/Card/LargeCard";
import { ImageTile } from "@/app/components/Tile/ImageTile";
import Image from "next/image";
import { Tile } from "@/app/components/Tile/Tile";
import { Table } from "@/app/components/Table/Table";

type WorkPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const allSeries = await getAllSeries();

  return allSeries.map((series) => ({
    slug: series.slug,
  }));
}

const SeriesContent: React.FC<WorkPageProps> = async ({ params }) => {
  const { slug } = await params;

  const series = await getSeries(slug);

  if (!series) {
    return (
      <Container>
        <div>
          Series not found&nbsp;
          <Link
            href={"/"}
            className="text-blue-900 underline underline-offset-4"
          >
            Check other series
          </Link>
        </div>
      </Container>
    );
  }

  const seriesWorks = await getAllWorks(series.slug);

  return (
    <main className="mt-2">
      <Container>
        <div className="flex flex-col md:flex-row gap-1">
          <Link href={"/"}>
            <Tile>
              <div className="p-2">Back</div>
            </Tile>
          </Link>
          <Link className="flex-auto" href={"#about"}>
            <Tile>
              <div className="p-2">About</div>
            </Tile>
          </Link>
          <Link className="flex-auto" href={"#details"}>
            <Tile>
              <div className="p-2">Details</div>
            </Tile>
          </Link>
        </div>

        <section id="works" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-2">
            {seriesWorks.map((work, index) => (
              <div key={`${work.slug}-${index}`}>
                <Card
                  image={work.images[0]}
                  title={work.title}
                  description={work.description}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-32">
          <GridSection
            layout={series.layout}
            highlightSlot={
              <LargeCard
                image={{
                  src: series.coverImage.src,
                  alt: series.coverImage.alt,
                }}
              />
            }
          >
            <div className="flex flex-col gap-2 h-full aspect-square md:aspect-auto">
              {series.featuredImages.map((tile, imageIndex) => (
                <div key={`image-${imageIndex}`} className="flex-auto">
                  <ImageTile
                    image={{
                      src: tile.src,
                      alt: tile.alt,
                    }}
                  />
                </div>
              ))}
            </div>
          </GridSection>
        </section>

        {series.content && (
          <section id="about" className="mt-32">
            <div className="flex flex-col md:flex-row-reverse gap-2">
              <div className="md:basis-2/3">
                <Markdown>
                  <div
                    className="markdown"
                    dangerouslySetInnerHTML={{
                      __html: series.content,
                    }}
                  ></div>
                </Markdown>
              </div>

              {series.images && (
                <div className="md:basis-1/3">
                  {series.images.map((image, index) => (
                    <div key={`about-image-${index}`} className="relative mb-2">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {series.details && (
          <section id="details">
            <Table
              data={series.details.map((detail) => ({
                label: detail.label,
                value: detail.value,
              }))}
            />
          </section>
        )}
      </Container>
    </main>
  );
};

export default SeriesContent;
