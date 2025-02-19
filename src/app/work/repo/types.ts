export interface Series {
  slug: string;
  title: string;
  description: string;
  coverImage: Image;
  featuredImages: Image[];
  images: Image[];
  layout?: Layout;
  content?: string;
}

export interface SeriesContent extends Series, PageContent {}

export interface SeriesData extends PageData {
  series: Series[];
  content?: string;
}

export interface Work {
  slug: string;
  title: string;
  description: string;
  images: Image[];
}

export interface WorkContent extends Work, PageContent {}

export type Layout = "cover-right" | "cover-left";
