import PostCollection from "../components/CreativeCoding/PostCollection";
import {Box, Center, Heading, Text, VStack} from "@chakra-ui/react";
import * as React from "react";
import {useTranslation} from "next-i18next";
import {GetStaticPropsResult} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";

const CreativeCodingPage: React.FC = (props) => {
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
                <PostCollection></PostCollection>
            </Box>
        </>
    );
};

export default CreativeCodingPage;

export async function getStaticProps({locale}): Promise<GetStaticPropsResult<any>> {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["creative-coding"])),
        },
    };
}
