import { loadFile } from "@/lib/file-loader/loadFile";
import { parseFrontMatter, parseMarkdown } from "@/lib/markdown-parser/parse";
import { projectBasePath } from "@/lib/file-loader/project-base-path";

const workPath = projectBasePath + "/content/about";

export const getAbout = async (): Promise<AboutData | null> => {
  const file = await loadFile(`${workPath}/index.md`);

  if (!file) {
    return null;
  }

  const frontmatter = await parseFrontMatter<AboutContent>(file);
  const content = parseMarkdown(file);

  return { ...frontmatter, content };
};
