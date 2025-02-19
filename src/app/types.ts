export interface Image {
  src: string;
  alt: string;
}

export interface Meta {
  title: string;
  description: string;
  openGraphImages: Image[];
  ogUrl: string;
}

export interface PageContent {
  slug: string;
  meta: Meta;
}

export interface PageData {
  slug: string;
  meta: Meta;
}
