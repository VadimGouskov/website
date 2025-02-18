interface HomeData {
  meta: Meta;
  works: Work[];
}

interface Work {
  title: string;
  description: string;
  coverImage: Image;
  featuredImages: Image[];
  images: Image[];
  layout?: Layout;
}

type Layout = "cover-right" | "cover-left";
