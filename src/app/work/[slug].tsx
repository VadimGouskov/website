import { useParams } from "next/navigation";
import * as React from "react";
import { getWorks } from "./repo/getWorks";
import { getWork } from "./repo/getWork";
type WorkPageProps = {};

export const WorkContent: React.FC<WorkPageProps> = async () => {
  const { slug } = useParams<{ slug: string }>();
  const allWorks = await getWorks();

  const work = getWork(slug);

  if (!work) {
    return <div>Work not found</div>;
  }

  return <>test</>;
};
