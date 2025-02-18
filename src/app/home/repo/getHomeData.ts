import { loadDir } from "@/lib/file-loader/loadDir";
import { loadFile } from "@/lib/file-loader/loadFile";
import { projectBasePath } from "@/lib/file-loader/project-base-path";
import { parseFrontMatter } from "@/lib/markdown-parser/parse";
import { HomeData, HomeIndexPage } from "./types";
import { Work } from "@/app/work/repo/types";

const homePath = projectBasePath + "/content/home";
const worksPath = projectBasePath + "/content/works";

export const getHomeData = async (): Promise<HomeData> => {
  const dir = await loadDir(worksPath);

  const works = await Promise.all(
    dir.map(async (fileName) => {
      const file = await loadFile(`${worksPath}/${fileName}`);
      const frontMatter = await parseFrontMatter<Work>(file);

      return frontMatter;
    })
  );

  const homeIndex = await loadFile(`${homePath}/index.md`);
  const { meta } = await parseFrontMatter<HomeIndexPage>(homeIndex);

  return { meta, works };
};
