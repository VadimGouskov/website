export interface Work {
  title: string;
  description: string;
  coverImage: Image;
  featuredImages: Image[];
  images: Image[];
  layout?: Layout;
}

export type Layout = "cover-right" | "cover-left";
