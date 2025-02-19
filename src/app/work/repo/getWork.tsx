import { loadFile } from "@/lib/file-loader/loadFile";
import { parseFrontMatter, parseMarkdown } from "@/lib/markdown-parser/parse";
import { WorkData, WorkContent, Work } from "./types";

export const getWork = async (slug: string): Promise<Work> => {
  const file = await loadFile(`src/data/works/${slug}.md`);
  const frontmatter = await parseFrontMatter<WorkContent>(file);
  const content = await parseMarkdown(file);

  return { ...frontmatter, content };
};
