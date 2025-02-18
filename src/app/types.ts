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
