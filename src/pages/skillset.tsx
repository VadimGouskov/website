import * as React from "react";
import {Box, Heading, Text} from "@chakra-ui/react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import Skill from "../components/Skillset/Skill";
import {GetStaticPropsResult} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import SkillBox from "../components/Skillset/SkillBox";
import {WaveSpacer} from "../components/Common/WaveSpacer";
import Contact from "../components/Contact";
import Head from "next/head";

interface Props {}

const SkillSetPage: React.FC<Props> = (props) => {
    const {t} = useTranslation("skillset");

    return (
        <>
            <Head>
                <title>Vadim Gouskov | Web Development</title>
                <meta
                    property="description"
                    content="Full stack Web Developer with a passion for modern frameworks and a clean development process. In love with Nextjs, React, nodejs, Typescript, Chakra UI and many more."
                    key="app-description"
                ></meta>
            </Head>
            {/* TIMELINE */}
            <Box as="section">
                <Box
                    maxW="2xl"
                    mx="auto"
                    px={{base: "6", lg: "8"}}
                    py={{base: "16", sm: "20"}}
                    textAlign="left"
                >
                    <Skill title={t("TIMELINE_UNIVERSITY_TITLE")}>
                        <SkillBox>{t("TIMELINE_UNIVERSITY_TEXT")}</SkillBox>
                    </Skill>

                    <Skill title={t("TIMELINE_DELEN_TITLE")}>
                        <SkillBox>{t("TIMELINE_DELEN_TEXT")} </SkillBox>
                    </Skill>

                    <Skill title={t("TIMELINE_TRAINING_TITLE")}>
                        <SkillBox> {t("TIMELINE_TRAINING_TEXT")}</SkillBox>
                    </Skill>

                    <Skill title={t("TIMELINE_FUTURE_TITLE")}>
                        <SkillBox>{t("TIMELINE_FUTURE_TEXT")}</SkillBox>
                    </Skill>
                </Box>
            </Box>

            {/* SKILL SET */}
            <WaveSpacer imageHref="assets/bottom-wave2.svg"></WaveSpacer>
            <Box as="section" backgroundColor="gray.50" mt="-2px">
                <Box
                    maxW="2xl"
                    mx="auto"
                    px={{base: "6", lg: "8"}}
                    py={{base: "16", sm: "20"}}
                    textAlign="left"
                >
                    <Heading size="xl">{t("WEBDEV_HEADING")}</Heading>

                    <Skill title={t("WEBDEV_BUILDING_WEBAPPS_TITLE")} emoji="⚙️" emojiLabel="gear">
                        {t("WEBDEV_BUILDING_WEBAPPS_TEXT")}
                    </Skill>

                    <Skill title={t("WEBDEV_STYLING_TITLE")} emoji="🖌️" emojiLabel="brush">
                        {t("WEBDEV_STYLING_TEXT")}
                    </Skill>

                    <Skill title={t("WEBDEV_DEPLOYING_TITLE")} emoji="🚀" emojiLabel="rocket">
                        {t("WEBDEV_DEPLOYING_TEXT")}
                    </Skill>

                    <Skill
                        title={t("WEBDEV_STREAMLINING_DEVELOPMENT_TITLE")}
                        emoji="👨‍💻"
                        emojiLabel="man-behind-computer"
                    >
                        {t("WEBDEV_STREAMLINING_DEVELOPMENT_TEXT")}
                    </Skill>

                    <Skill
                        title={t("WEBDEV_BROWSER_EXTENSIONS_TITLE")}
                        emoji="✨"
                        emojiLabel="sparkles"
                    >
                        {t("WEBDEV_BROWSER_EXTENSIONS_TEXT")}
                    </Skill>

                    <Heading size="xl" mt="14">
                        {t("OTHER_HEADING")}
                    </Heading>

                    <Skill title={t("OTHER_LANGUAGES_TITLE")}>
                        <Text>
                            {getUnicodeFlagIcon("BE")} {t("OTHER_LANGUAGES_DUTCH")}
                        </Text>
                        <Text>
                            {getUnicodeFlagIcon("GB")} {t("OTHER_LANGUAGES_ENGLISH")}
                        </Text>
                        <Text>
                            {getUnicodeFlagIcon("RU")} {t("OTHER_LANGUAGES_RUSSIAN")}
                        </Text>
                        <Text>
                            {getUnicodeFlagIcon("TR")} {t("OTHER_LANGUAGES_TURKISH")}
                        </Text>
                    </Skill>

                    <Skill title={t("OTHER_TECHNICAL_COMMUNICATION_TITLE")}>
                        {t("OTHER_TECHNICAL_COMMUNICATION_TEXT")}
                    </Skill>
                </Box>
            </Box>

            {/* CALL TO ACTION */}
            <Box as="section" backgroundColor="gray.50" id="contact-section" height="70vh">
                <Contact></Contact>
            </Box>
        </>
    );
};

export default SkillSetPage;

export async function getStaticProps({locale}): Promise<GetStaticPropsResult<any>> {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["skillset"])),
        },
    };
}
