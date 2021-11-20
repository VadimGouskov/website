import Hero from "../components/Hero";
import React from "react";
import Feature from "../components/Feature";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticPropsResult} from "next";
import {useTranslation} from "next-i18next";
import BlobFeature from "../components/Feature/BlobFeature";
import {Box, Img} from "@chakra-ui/react";
import WebIcon from "../components/Feature/WebIcon";

const Index: React.FC = () => {
    const {t} = useTranslation("index");

    return (
        <>
            <Hero></Hero>
            <Box overflowX={{base: "hidden", lg: "visible"}}>
                <BlobFeature
                    title={t("FEATURE_WEB_DEVELOPMENT_TITLE")}
                    text={t("FEATURE_WEB_DEVELOPMENT_TEXT")}
                    buttonText={t("FEATURE_WEB_DEVELOPMENT_BUTTON")}
                >
                    <Box
                        position="relative"
                        height={{base: "300px", lg: "400px"}}
                        left={{base: "25%", md: "0"}}
                    >
                        <WebIcon imgSrc="assets/react-logo.svg" />
                        <WebIcon imgSrc="assets/nextjs-logo.svg" offsetX="50%" />
                        <WebIcon
                            imgSrc="assets/nodejs-logo.svg"
                            offsetX="25%"
                            offsetY={{base: "33%", md: "50%"}}
                        />
                        <WebIcon
                            imgSrc="assets/typescript-logo.svg"
                            offsetX="50%"
                            offsetY={{base: "66%", md: "100%"}}
                            logoWidth="85%"
                            rounded="10%"
                        />
                        <WebIcon
                            imgSrc="assets/webpack-logo.svg"
                            offsetX="0%"
                            offsetY={{base: "66%", md: "100%"}}
                        />
                    </Box>
                </BlobFeature>

                <BlobFeature
                    reverse
                    title={t("FEATURE_CREATIVE_CODING_TITLE")}
                    text={t("FEATURE_CREATIVE_CODING_TEXT")}
                    buttonText={t("FEATURE_CREATIVE_CODING_BUTTON")}
                >
                    <Img
                        htmlWidth="500px"
                        htmlHeight="320px"
                        height={{md: "320px"}}
                        objectFit="cover"
                        src="assets/wave.png"
                        alt="TODO"
                    />
                </BlobFeature>

                <BlobFeature
                    title={t("FEATURE_OTLI_TITLE")}
                    text={t("FEATURE_OTLI_TEXT")}
                    buttonText={t("FEATURE_OTLI_BUTTON")}
                >
                    <Box position="relative" height="400px">
                        <Img
                            position="absolute"
                            src="assets/otli-blip.svg"
                            width="66%"
                            top="16%"
                            left="75%"
                            transform="translate(-50%, -50%)"
                        ></Img>
                        <Img
                            position="absolute"
                            src="assets/otli-blip2.svg"
                            width="50%"
                            left={{base: "0", md: "-20%"}}
                            top="66%"
                            transform="translate(-50%, -50%)"
                        ></Img>
                        <Box
                            pos="absolute"
                            backgroundColor="rgb(14, 17, 61)"
                            width="66%"
                            height="66%"
                        >
                            <Img
                                width="66%"
                                src="assets/otli-logo-white.svg"
                                objectFit="contain"
                                position="absolute"
                                left="50%"
                                top="50%"
                                transform="translate(-50%, -50%)"
                            ></Img>
                        </Box>
                    </Box>
                </BlobFeature>
            </Box>
        </>
    );
};

export default Index;

export async function getStaticProps({locale}): Promise<GetStaticPropsResult<any>> {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["index"])),
        },
    };
}
