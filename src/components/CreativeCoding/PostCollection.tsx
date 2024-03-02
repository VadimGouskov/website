import {Box, Link, SimpleGrid} from "@chakra-ui/react";
import {useTranslation} from "next-i18next";
import * as React from "react";
import PostCard from "./PostCard";

const PostCollection: React.FC = () => {
    // const {t} = useTranslation("creative-coding");
    return (
        <Box as="section" py={{base: "10", sm: "24"}}>
            <Box maxW={{base: "xl", md: "7xl"}} mx="auto" px={{base: "6", md: "8"}}>
                <SimpleGrid columns={{base: 1, md: 3}} spacing="12" mb="10">
                    {/* <PostCard
                        title={t("POST_PRETTY_GRID_TITLE")}
                        category="Instagram"
                        media="assets/pretty-grid-post-title-image.jpg"
                        description={t("POST_PRETTY_GRID_TEXT")}
                        href="https://prettygrid.vadimgouskov.com"
                    />
                    <PostCard
                        title={t("POST_INSTAGRAM_TITLE")}
                        category="Instagram"
                        media="assets/vadim-gouskov-instagram-collection.png"
                        description={t("POST_INSTAGRAM_TEXT")}
                        href="https://www.instagram.com/vadim.gouskov/"
                    />
                    <PostCard
                        title={t("POST_P5_TYPESCRIPT_STARTER_TITLE")}
                        category="GitHub"
                        media="assets/p5js-typescript-starter-project.png"
                        description={t("POST_P5_TYPESCRIPT_STARTER_TEXT")}
                        href="https://github.com/VadimGouskov/p5-typescript-dev-server"
                    />
                    <PostCard
                        title={t("POST_P5_SOURCE_CODE_TITLE")}
                        category="GitHub"
                        media="assets/generative-art-source-code.jpg"
                        description={t("POST_P5_SOURCE_CODE_TEXT")}
                        href="https://github.com/VadimGouskov/p5-projects"
                    /> */}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default PostCollection;
