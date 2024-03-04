import PostCollection from "../components/CreativeCoding/PostCollection";
import {Box, Center, Heading, Text, VStack} from "@chakra-ui/react";
import * as React from "react";
import {SSRConfig, useTranslation} from "next-i18next";
import {GetStaticPropsResult} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";

import matter from "gray-matter";

import fs from "fs";
import {Post} from "@/main";

type Props = SSRConfig & {
    posts: Post[];
};

const CreativeCodingPage: React.FC<Props> = (props) => {
    const {t} = useTranslation("creative-coding");
    return (
        <>
            <Head>
                <title>Vadim Gouskov | Creative Coding</title>
                <meta
                    property="description"
                    content="Exploring the perfect combination of two passions: Art and Technology. Creating generative designs and libraries along the way."
                    key="app-description"
                ></meta>
            </Head>

            <Box p="5">
                <Center>
                    <Box width={["md"]}>
                        <VStack>
                            <Heading>{t("CREATIVE_CODING_HEADING")}</Heading>
                            <Text
                                style={{whiteSpace: "pre-line"}}
                                dangerouslySetInnerHTML={{__html: t("CREATIVE_CODING_TEXT")}}
                            ></Text>
                        </VStack>
                    </Box>
                </Center>

                <PostCollection posts={props.posts}></PostCollection>
            </Box>
        </>
    );
};

export default CreativeCodingPage;

export async function getStaticProps({
    locale,
}): Promise<GetStaticPropsResult<SSRConfig & {posts: Post[]}>> {
    let posts = [];

    try {
        const files = fs.readdirSync(process.env.POSTS_DIRECTORY);

        const mappedPosts = files
            .filter((fileName) => {
                const file = fs.readFileSync(`${process.env.POSTS_DIRECTORY}/${fileName}`, "utf-8");
                const {data: frontmatter, content} = matter(file);

                if (frontmatter.draft == true) {
                    return false;
                }

                return true;
            })

            .map((fileName) => {
                const slug = fileName.replace(".md", "");
                const readFile = fs.readFileSync(
                    `${process.env.POSTS_DIRECTORY}/${fileName}`,
                    "utf-8",
                );
                const {data: frontmatter} = matter(readFile);

                return {
                    slug,
                    frontmatter,
                };
            });

        posts = mappedPosts;
    } catch (error) {
        console.error(error);
    }

    return {
        props: {
            ...(await serverSideTranslations(locale, ["creative-coding"])),
            posts,
        },
    };
}
