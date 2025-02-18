import { promises as fs } from "fs";

export const loadDir = async (path: string): Promise<string[]> => {
  const fileNames = await fs.readdir(path);

  return fileNames;
};
