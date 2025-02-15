interface HomeData {
  meta: Meta;
  works: Work[];
}

interface Work {
  title: string;
  description: string;
  coverImage: Image;
  images: Image[];
}
