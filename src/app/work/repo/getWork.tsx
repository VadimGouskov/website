import { loadFile } from "@/lib/file-loader/loadFile";
import { parseFrontMatter, parseMarkdown } from "@/lib/markdown-parser/parse";
import { WorkData, WorkContent, Work } from "./types";
import { projectBasePath } from "@/lib/file-loader/project-base-path";

const workPath = projectBasePath + "/content/works";

export const getWork = async (slug: string): Promise<Work | null> => {
  const file = await loadFile(`${workPath}/${slug}.md`);

  if (!file) {
    return null;
  }

  const frontmatter = await parseFrontMatter<WorkContent>(file);
  const content = parseMarkdown(file);

  return { ...frontmatter, content };
};
