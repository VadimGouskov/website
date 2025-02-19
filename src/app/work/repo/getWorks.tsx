import { projectBasePath } from "@/lib/file-loader/project-base-path";
import { Series, SeriesContent, SeriesData } from "./types";
import { parseFrontMatter } from "@/lib/markdown-parser/parse";
import { loadDir } from "@/lib/file-loader/loadDir";
import { loadFile } from "@/lib/file-loader/loadFile";

const worksPath = projectBasePath + "/content/series";

export const getWorks = async (): Promise<Series[]> => {
  const dir = await loadDir(worksPath);
  const series = (await Promise.all(
    dir
      .map(async (fileName) => {
        const file = await loadFile(`${worksPath}/${fileName}`);

        if (!file) {
          return null;
        }

        const frontMatter = await parseFrontMatter<SeriesContent>(file);

        return frontMatter;
      })
      .filter((work) => work !== null)
  )) as Series[];

  return series;
};
