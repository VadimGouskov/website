import {Box, Img} from "@chakra-ui/react";
import {useTranslation} from "next-i18next";
import * as React from "react";
import BlobFeature from "../Feature/BlobFeature";

const Otli: React.FC = () => {
    const {t} = useTranslation("index");

    return (
        <BlobFeature
            title={t("FEATURE_OTLI_TITLE")}
            text={t("FEATURE_OTLI_TEXT")}
            buttonText={t("FEATURE_OTLI_BUTTON")}
            buttonHref="https://www.otli.io"
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
                <Box pos="absolute" backgroundColor="rgb(14, 17, 61)" width="66%" height="66%">
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
    );
};

export default Otli;
