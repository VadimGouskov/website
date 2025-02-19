import { loadDir } from "@/lib/file-loader/loadDir";
import { loadFile } from "@/lib/file-loader/loadFile";
import { projectBasePath } from "@/lib/file-loader/project-base-path";
import { Work, WorkContent } from "./types";
import { parseFrontMatter } from "@/lib/markdown-parser/parse";

const seriesPath = projectBasePath + "/content/series";

export const getAllWorks = async (seriesName: string): Promise<Work[]> => {
  const dir = await loadDir(`${seriesPath}/${seriesName}`);
  const filteredDir = dir.filter((fileName) => fileName !== "index.md");

  const works = (await Promise.all(
    filteredDir
      .map(async (fileName) => {
        const file = await loadFile(`${seriesPath}/${seriesName}/${fileName}`);

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
