import { projectBasePath } from "@/lib/file-loader/project-base-path";
import { Series, SeriesContent, SeriesData } from "./types";
import { parseFrontMatter } from "@/lib/markdown-parser/parse";
import { loadDir } from "@/lib/file-loader/loadDir";
import { loadFile } from "@/lib/file-loader/loadFile";

const seriesPath = projectBasePath + "/content/series";

export const getAllSeries = async (): Promise<Series[]> => {
  const dir = await loadDir(seriesPath);
  const series = (await Promise.all(
    dir
      .map(async (fileName) => {
        const file = await loadFile(`${seriesPath}/${fileName}/index.md`);

        if (!file) {
          return null;
        }

        const frontMatter = await parseFrontMatter<SeriesContent>(file);

        return frontMatter;
      })
      .filter((series) => series !== null)
  )) as Series[];

  return series;
};
