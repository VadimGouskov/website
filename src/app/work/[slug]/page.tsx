import * as React from "react";
import { getAllSeries } from "../repo/getAllSeries";
import { getSeries } from "../repo/getSeries";
import { Container } from "@/app/components/Container";
import Link from "next/link";
import { Markdown } from "@/app/components/Markdown/Markdown";
import { getAllWorks } from "../repo/getAllWorks";
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
    <main>
      <Container>
        {seriesWorks.map((work, index) => (
          <div key={work.slug}>{work.title}</div>
        ))}

        {series.content && (
          <Markdown>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: series.content,
              }}
            ></div>
          </Markdown>
        )}
      </Container>
    </main>
  );
};

export default SeriesContent;
