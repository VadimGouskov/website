import {Box, Button, Heading, Stack, Text, LightMode, Link} from "@chakra-ui/react";
import {useTranslation} from "next-i18next";
import * as React from "react";
import {WaveSpacer} from "../Common/WaveSpacer";

const Hero: React.FC = () => {
    const {t} = useTranslation("index");

    return (
        <>
            <Box transform="translate(0px, -150px)">
                <Box as="section" bg="black" color="white" py="7.5rem">
                    <Box maxW={{base: "xl", md: "5xl"}} mx="auto" px={{base: "6", md: "8"}}>
                        <Box textAlign="center">
                            <Heading
                                as="h1"
                                size="4xl"
                                fontWeight="extrabold"
                                maxW="48rem"
                                mx="auto"
                                lineHeight="1.2"
                                letterSpacing="tight"
                                color="white"
                            >
                                Vadim Gouskov
                            </Heading>
                            <Text fontSize="2xl" mt="4" maxW="xl" mx="auto" color="white">
                                {t("HERO_TITLE_WEB_DEVELOPER")}&nbsp;&bull;&nbsp;
                                {t("HERO_TITLE_CREATIVE_CODING")}
                                <br />
                                {t("HERO_TITLE_CREATOR_OF")}{" "}
                                <Link href="https://www.otli.io">Otli.io</Link> &{" "}
                                <Link href="https://prettygrid.vadimgouskov.com">pretty-grid</Link>
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <WaveSpacer imageHref="assets/hero-wave.svg"></WaveSpacer>
            </Box>
        </>
    );
};

export default Hero;
