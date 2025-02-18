import { promises as fs } from "fs";

const loadDir = async (path: string): Promise<Record<string, any>> => {
  const fileNames = await fs.readdir(path);

  return fileNames;
};
