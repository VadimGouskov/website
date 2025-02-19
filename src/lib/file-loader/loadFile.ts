import { promises as fs } from "fs";

export const loadFile = async (path: string): Promise<string | null> => {
  try {
    const data = await fs.readFile(path, "utf-8");
    return data;
  } catch (error) {
    console.error("Error reading the file:", error);
    return null;
  }
};
