import { projectBasePath } from "@/lib/file-loader/project-base-path";
import { Work, WorkContent, WorkData } from "./types";
import { parseFrontMatter } from "@/lib/markdown-parser/parse";
import { loadDir } from "@/lib/file-loader/loadDir";
import { loadFile } from "@/lib/file-loader/loadFile";

const worksPath = projectBasePath + "/content/works";

export const getWorks = async (): Promise<Work[]> => {
  const dir = await loadDir(worksPath);
  const works = (await Promise.all(
    dir
      .map(async (fileName) => {
        const file = await loadFile(`${worksPath}/${fileName}`);

        if (!file) {
          return null;
        }

        const frontMatter = await parseFrontMatter<WorkContent>(file);

        return frontMatter;
      })
      .filter((work) => work !== null)
  )) as Work[];

  return works;
};
