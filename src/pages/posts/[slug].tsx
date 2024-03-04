import {Box, Container, Heading} from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export async function getStaticPaths() {
    try {
        const fileNames = fs.readdirSync("src/content/posts");

        const paths = fileNames
            .filter((fileName) => {
                const file = fs.readFileSync(`src/content/posts/${fileName}`, "utf-8");
                const {data: frontmatter, content} = matter(file);

                if (frontmatter.draft == true) {
                    return false;
                }

                if (frontmatter.externalLink) {
                    return false;
                }

                return true;
            })
            .map((fileName) => ({
                params: {
                    slug: fileName.replace(".md", ""),
                },
            }));

        return {
            paths,
            fallback: "blocking",
        };
    } catch (error) {
        console.error(error);

        return {
            paths: [],
            fallback: false,
        };
    }
}

export async function getStaticProps({params: {slug}}) {
    try {
        const fileName = fs.readFileSync(`src/content/posts/${slug}.md`, "utf-8");
        const {data: frontmatter, content} = matter(fileName);

        return {
            props: {
                frontmatter,
                content,
            },
        };
    } catch (error) {
        console.error(error);

        return {
            props: {},
        };
    }
}

function Post({frontmatter, content}) {
    return (
        <Box padding={"x2"}>
            <Container className="prose mx-auto mt-8">
                <div dangerouslySetInnerHTML={{__html: md().render(content)}} />
            </Container>
        </Box>
    );
}

export default Post;
