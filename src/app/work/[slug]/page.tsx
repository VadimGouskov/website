import * as React from "react";
import { getWorks } from "../repo/getWorks";
import { getWork } from "../repo/getWork";
import { Container } from "@/app/components/Container";
import Link from "next/link";
import { Markdown } from "@/app/components/Markdown/Markdown";
type WorkPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  console.log("generateStaticParams");
  const allWorks = await getWorks();

  console.log(allWorks);

  return allWorks.map((work) => ({
    slug: work.slug,
  }));
}

const WorkContent: React.FC<WorkPageProps> = async ({ params }) => {
  const { slug } = params;

  const work = await getWork(slug);

  if (!work) {
    return (
      <Container>
        <div>
          Work not found&nbsp;
          <Link
            href={"/"}
            className="text-blue-900 underline underline-offset-4"
          >
            Check other works
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <main>
      <Container>
        {work.content && (
          <Markdown>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: work.content,
              }}
            ></div>
          </Markdown>
        )}
      </Container>
    </main>
  );
};

export default WorkContent;
