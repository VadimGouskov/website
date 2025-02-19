export interface Work {
  title: string;
  description: string;
  coverImage: Image;
  featuredImages: Image[];
  images: Image[];
  layout?: Layout;
  content?: string;
}

export interface WorkContent extends Work, PageContent {}

export interface WorkData extends PageData {
  works: Work[];
  content: string;
}

export type Layout = "cover-right" | "cover-left";
