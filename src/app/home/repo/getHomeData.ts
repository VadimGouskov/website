import { loadFile } from "@/lib/file-loader/loadFile";
import { projectBasePath } from "@/lib/file-loader/project-base-path";
import { parseFrontMatter } from "@/lib/markdown-parser/parse";

export const getHomeData = async (): Promise<HomeData> => {
  const file = await loadFile(projectBasePath + "/content/works/no-data.md");

  const frontMatter = await parseFrontMatter(file);

  return { works: [frontMatter] };
};
