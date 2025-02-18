import { loadDir } from "@/lib/file-loader/loadDir";
import { loadFile } from "@/lib/file-loader/loadFile";
import { projectBasePath } from "@/lib/file-loader/project-base-path";
import { parseFrontMatter } from "@/lib/markdown-parser/parse";

export const getHomeData = async (): Promise<HomeData> => {
  const dir = await loadDir(projectBasePath + "/content/works");

  const works = await Promise.all(
    dir.map(async (fileName) => {
      const file = await loadFile(
        projectBasePath + "/content/works/" + fileName
      );
      const frontMatter = await parseFrontMatter(file);

      return frontMatter;
    })
  );

  return { works };
};
