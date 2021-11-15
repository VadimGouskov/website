import {LineList} from "../components/LineList";
import * as React from "react";
import {Box, Heading, Text, Button, UnorderedList, ListItem, Icon} from "@chakra-ui/react";
import Flags from "country-flag-icons/react/3x2";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import Skill from "../components/Skillset/Skill";
import {GetStaticPropsResult} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

interface Props {}

const Skillset: React.FC<Props> = (props) => {
    const {t} = useTranslation("skillset");

    return (
        <>
            {/* TIMELINE */}
            <LineList></LineList>

            {/* SKILLSET */}
            <Box as="section">
                <Box
                    maxW="2xl"
                    mx="auto"
                    px={{base: "6", lg: "8"}}
                    py={{base: "16", sm: "20"}}
                    textAlign="left"
                >
                    <Heading size="xl">{t("WEBDEV_HEADING")}</Heading>

                    <Skill title={t("WEBDEV_BUILDING_WEBAPPS_TITLE")} icon={Flags.US}>
                        {t("WEBDEV_BUILDING_WEBAPPS_TEXT")}
                    </Skill>

                    <Skill title={t("WEBDEV_STYLING_TITLE")}>{t("WEBDEV_STYLING_TEXT")}</Skill>

                    <Skill title={t("WEBDEV_DEVPLOYING_TITLE")}>
                        {t("WEBDEV_DEVPLOYING_TEXT")}
                    </Skill>

                    <Skill title={t("WEBDEV_STREAMLINING_DEVELOPMENT_TITLE")}>
                        {t("WEBDEV_STREAMLINING_DEVELOPMENT_TEXT")}
                    </Skill>

                    <Skill title={t("WEBDEV_MANAGING_DEPLOYMENTS_TITLE")}>
                        {t("WEBDEV_MANAGING_DEPLOYMENTS_TEXT")}
                    </Skill>

                    <Heading size="xl"> {t("OTHER_HEADING")} </Heading>

                    <Skill title={t("OTHER_LANGUAGES_TITLE")}>
                        <Text>
                            {getUnicodeFlagIcon("BE")} {t("OTHER_LANGUAGES_DUTCH")} Dutch: native
                        </Text>
                        <Text>
                            {getUnicodeFlagIcon("GB")} {t("OTHER_LANGUAGES_ENGLISH")} English:
                            Advanced
                        </Text>
                        <Text>
                            {getUnicodeFlagIcon("RU")} {t("OTHER_LANGUAGES_RUSSIAN")} Russian:
                            Intermediate{" "}
                        </Text>
                        <Text>
                            {getUnicodeFlagIcon("TR")} {t("OTHER_LANGUAGES_TURKISH")} Turkish:
                            Beginner (Activly studying)
                        </Text>
                    </Skill>
                </Box>
            </Box>

            {/* CALL TO ACTION */}
            <Box as="section">
                <Box
                    maxW="2xl"
                    mx="auto"
                    px={{base: "6", lg: "8"}}
                    py={{base: "16", sm: "20"}}
                    textAlign="center"
                >
                    <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
                        Want to work together?
                    </Heading>
                    <Text mt="4" fontSize="lg">
                        Want to talk about a job oportunity, project, collaboration or common
                        interest? Contact me and I will get in touch with you asap.
                    </Text>
                    <Button mt="8" as="a" href="#" size="lg" colorScheme="blue" fontWeight="bold">
                        Contact
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Skillset;

export async function getStaticProps({locale}): Promise<GetStaticPropsResult<any>> {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["skillset"])),
        },
    };
}
