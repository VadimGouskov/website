import PostCollection from "../components/CreativeCoding/PostCollection";
import {Box, Center, Heading, Text, VStack} from "@chakra-ui/react";
import * as React from "react";
import {useTranslation} from "next-i18next";
import {GetStaticPropsResult} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

interface Props {}

const CreativeCoding: React.FC<Props> = (props) => {
    const {t} = useTranslation("creative-coding");
    return (
        <>
            <Box p="5">
                <Center>
                    <Box width={["md"]}>
                        <VStack>
                            <Heading>{t("CREATIVE_CODING_HEADING")}</Heading>
                            <Text>{t("CREATIVE_CODING_TEXT")}</Text>
                        </VStack>
                    </Box>
                </Center>
                <PostCollection></PostCollection>
            </Box>
        </>
    );
};

export default CreativeCoding;

export async function getStaticProps({locale}): Promise<GetStaticPropsResult<any>> {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["creative-coding"])),
        },
    };
}
