import { PageContent, PageData, Image } from "@/app/types";

export interface AboutContent extends PageContent {
  title: string;
  image: Image;
  content: string;
}

export interface AboutData extends PageData {
  title: string;
  image: Image;
  content: string;
}
