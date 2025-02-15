import data from "./data.json";

export const getHomeData = async (): Promise<HomeData> => {
  const result = new Promise<HomeData>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

  return result;
};
