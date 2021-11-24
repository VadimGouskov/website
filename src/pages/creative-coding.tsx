import PostCollection from "../components/CreativeCoding/PostCollection";
import {Box, Center, Heading, Text, VStack} from "@chakra-ui/react";
import * as React from "react";
import {useTranslation} from "next-i18next";
import {GetStaticPropsResult} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const CreativeCodingPage: React.FC = (props) => {
    const {t} = useTranslation("creative-coding");
    return (
        <>
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
