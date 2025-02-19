import { loadFile } from "@/lib/file-loader/loadFile";
import { parseFrontMatter, parseMarkdown } from "@/lib/markdown-parser/parse";
import { SeriesData, SeriesContent, Series } from "./types";
import { projectBasePath } from "@/lib/file-loader/project-base-path";

const workPath = projectBasePath + "/content/series";

export const getWork = async (slug: string): Promise<Series | null> => {
  const file = await loadFile(`${workPath}/${slug}.md`);

  if (!file) {
    return null;
  }

  const frontmatter = await parseFrontMatter<SeriesContent>(file);
  const content = parseMarkdown(file);

  return { ...frontmatter, content };
};
