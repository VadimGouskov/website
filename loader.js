import { getCurrentUrl } from "@/lib/getCurrentUrl";

const customLoader = ({ src, width, quality }) => {
  return `${getCurrentUrl()}${src}?w=${width}q=${quality || 75}`;
};

export default customLoader;
