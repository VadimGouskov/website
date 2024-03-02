import {Box, Link, SimpleGrid} from "@chakra-ui/react";
import {useTranslation} from "next-i18next";
import * as React from "react";
import PostCard from "./PostCard";
import {Post} from "@/main";

type Props = {
    posts: Post[];
};

const PostCollection: React.FC<Props> = (props) => {
    // const {t} = useTranslation("creative-coding");
    return (
        <Box as="section" py={{base: "10", sm: "24"}}>
            <Box maxW={{base: "xl", md: "7xl"}} mx="auto" px={{base: "6", md: "8"}}>
                <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing="12" mb="10">
                    {props.posts.map((post) => {
                        return (
                            <PostCard
                                key={post.slug}
                                title={post.frontmatter.title}
                                category={post.frontmatter.category}
                                media={post.frontmatter.cover}
                                description={post.frontmatter.description}
                                href={post.frontmatter.link || `/${post.slug}`}
                            />
                        );
                    })}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default PostCollection;
