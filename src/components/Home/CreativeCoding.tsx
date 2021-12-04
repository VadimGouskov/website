import {Img} from "@chakra-ui/react";
import {useTranslation} from "next-i18next";
import * as React from "react";
import HomeSketch from "../CreativeCoding/HomeSketch";
import BlobFeature from "../Feature/BlobFeature";

const CreativeCoding: React.FC = () => {
    const {t} = useTranslation("index");

    return (
        <BlobFeature
            reverse
            title={t("FEATURE_CREATIVE_CODING_TITLE")}
            text={t("FEATURE_CREATIVE_CODING_TEXT")}
            buttonText={t("FEATURE_CREATIVE_CODING_BUTTON")}
            buttonHref="creative-coding"
        >
            {/*

            <Img
                htmlWidth="500px"
                htmlHeight="320px"
                height={{md: "320px"}}
                objectFit="cover"
                src="assets/wave.png"
                alt="TODO"
            />
            */}

            <HomeSketch />
        </BlobFeature>
    );
};

export default CreativeCoding;
