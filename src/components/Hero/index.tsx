import {Box, Button, Heading, Stack, Text, LightMode} from "@chakra-ui/react";
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
                            >
                                Vadim Gouskov
                            </Heading>
                            <Text fontSize="2xl" mt="4" maxW="xl" mx="auto">
                                {t("HERO_TITLE_WEB_DEVELOPER")} &bull;{" "}
                                {t("HERO_TITLE_CREATIVE_CODING")} &bull;{" "}
                                {t("HERO_TITLE_CREATOR_OTLI")}
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <WaveSpacer svgName="hero-svg"></WaveSpacer>
            </Box>
        </>
    );
};

export default Hero;
