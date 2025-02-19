import { Work } from "@/app/work/repo/types";

export interface HomeIndexContent extends PageContent {}

export interface HomeData extends PageData {
  works: Work[];
}
