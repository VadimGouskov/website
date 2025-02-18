import { Work } from "@/app/work/repo/types";

export interface HomeIndexPage {
  meta: Meta;
}

export interface HomeData {
  meta: Meta;
  works: Work[];
}
