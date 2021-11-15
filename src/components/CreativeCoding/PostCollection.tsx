import {Box, Link, SimpleGrid} from "@chakra-ui/react";
import {useTranslation} from "next-i18next";
import * as React from "react";
import PostCard from "./PostCard";

const PostCollection: React.FC = () => {
    const {t} = useTranslation("creative-coding");
    return (
        <Box as="section" py={{base: "10", sm: "24"}}>
            <Box maxW={{base: "xl", md: "7xl"}} mx="auto" px={{base: "6", md: "8"}}>
                <SimpleGrid columns={{base: 1, md: 3}} spacing="12" mb="10">
                    <PostCard
                        title={t("POST_INSTAGRAM_TITLE")}
                        category="Fashion"
                        media="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        description={t("POST_INSTAGRAM_TEXT")}
                        href="#"
                    />
                    <PostCard
                        title={t("POST_P5_TYPESCRIPT_STARTER_TITLE")}
                        category="Valentine"
                        media="https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        description={t("POST_P5_TYPESCRIPT_STARTER_TEXT")}
                        href="#"
                    />
                    <PostCard
                        title={t("POST_P5_SOURCE_CODE_TITLE")}
                        category="My Style"
                        media="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        description={t("POST_P5_SOURCE_CODE_TEXT")}
                        href="#"
                    />
                    <PostCard
                        title={t("POST_P5_FILE_SERVER_TITLE")}
                        category="My Style"
                        media="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        description={t("POST_P5_FILE_SERVER_TEXT")}
                        href="#"
                    />
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default PostCollection;
