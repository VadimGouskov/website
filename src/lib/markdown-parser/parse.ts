import { fromMarkdown } from "mdast-util-from-markdown";
import { frontmatterFromMarkdown } from "mdast-util-frontmatter";
import { Options, micromark } from "micromark";
import { frontmatter, frontmatterHtml } from "micromark-extension-frontmatter";
import yaml from "js-yaml";

// Function to parse frontmatter and markdown content
const strToMarkdown = <T>(value: string) => {
  const tree = fromMarkdown(value, {
    extensions: [frontmatter()],
    mdastExtensions: [frontmatterFromMarkdown()],
  });
  const firstChild = tree.children[0];
  let frontMatter = {} as T;

  // Step 3: Check if the first child is of type 'yaml'
  if (firstChild && firstChild.type === "yaml") {
    // Step 4: Parse the YAML frontmatter using yaml.safeLoad
    frontMatter = yaml.load(firstChild.value) as T;
  } else {
    // Optional: You could leave this else block empty since frontMatter is already initialized as an empty object
    frontMatter = {} as T;
  }
  return { frontMatter };
};

// Function to parse the Markdown content and convert it to HTML
export const parseFrontMatter = async <T>(content: string) => {
  try {
    const { frontMatter } = strToMarkdown<T>(content);
    return frontMatter;
  } catch (error) {
    console.error("Error reading or parsing the file:", error);
    return {} as T;
  }
};

export const parseMarkdown = (content: string) => {
  const output = micromark(content, {
    extensions: [frontmatter()],
    htmlExtensions: [frontmatterHtml()],
  });

  return output;
};
