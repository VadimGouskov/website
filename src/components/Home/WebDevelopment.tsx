import {Box} from "@chakra-ui/react";
import {useTranslation} from "next-i18next";
import * as React from "react";
import BlobFeature from "../Feature/BlobFeature";
import WebIcon from "../Feature/WebIcon";

const WebDevelopment: React.FC = () => {
    const {t} = useTranslation("index");

    return (
        <BlobFeature
            title={t("FEATURE_WEB_DEVELOPMENT_TITLE")}
            text={t("FEATURE_WEB_DEVELOPMENT_TEXT")}
            buttonText={t("FEATURE_WEB_DEVELOPMENT_BUTTON")}
            buttonHref="skillset"
        >
            <Box
                position="relative"
                height={{base: "300px", lg: "400px"}}
                left={{base: "25%", md: "0"}}
            >
                <WebIcon imgSrc="assets/react-logo.svg" animationClass="webdev-icon--top-left" />
                <WebIcon
                    imgSrc="assets/nextjs-logo.svg"
                    animationClass="webdev-icon--top-right"
                    offsetX="50%"
                />
                <WebIcon
                    imgSrc="assets/nodejs-logo.svg"
                    animationClass="webdev-icon--center"
                    offsetX="25%"
                    offsetY={{base: "33%", md: "50%"}}
                />
                <WebIcon
                    imgSrc="assets/typescript-logo.svg"
                    animationClass="webdev-icon--bottom-right"
                    offsetX="50%"
                    offsetY={{base: "66%", md: "100%"}}
                    logoWidth="85%"
                    rounded="10%"
                />
                <WebIcon
                    imgSrc="assets/webpack-logo.svg"
                    animationClass="webdev-icon--bottom-left"
                    offsetX="0%"
                    offsetY={{base: "66%", md: "100%"}}
                />
            </Box>
        </BlobFeature>
    );
};

export default WebDevelopment;
