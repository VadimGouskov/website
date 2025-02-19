interface Image {
  src: string;
  alt: string;
}

interface Meta {
  title: string;
  description: string;
  openGraphImages: Image[];
  ogUrl: string;
}

interface PageContent {
  slug: string;
  meta: Meta;
}

interface PageData {
  slug: string;
  meta: Meta;
}
