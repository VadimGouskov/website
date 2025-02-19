import { loadDir } from "@/lib/file-loader/loadDir";
import { loadFile } from "@/lib/file-loader/loadFile";
import { projectBasePath } from "@/lib/file-loader/project-base-path";
import { parseFrontMatter } from "@/lib/markdown-parser/parse";
import { HomeData, HomeIndexContent } from "./types";
import { Series, SeriesContent } from "@/app/work/repo/types";

const homePath = projectBasePath + "/content/home";
const seriesPath = projectBasePath + "/content/series";

export const getHomeData = async (): Promise<HomeData> => {
  const dir = await loadDir(seriesPath);

  const series = await Promise.all(
    dir.map(async (fileName) => {
      const file = await loadFile(`${seriesPath}/${fileName}/index.md`);
      const frontMatter = await parseFrontMatter<SeriesContent>(file);

      return frontMatter;
    })
  );

  const homeIndex = await loadFile(`${homePath}/index.md`);
  const { meta, slug } = await parseFrontMatter<HomeIndexContent>(homeIndex);

  return { slug, meta, series };
};
