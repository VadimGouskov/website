import * as React from "react";

import {Center, VStack} from "@chakra-ui/react";
import BioLink from "./BioLink";
import Link from "next/link";
import {useTranslation} from "next-i18next";

type Props = {};

const BioLinkList: React.FC<Props> = () => {
    const {t} = useTranslation("links");
    return (
        <Center mt="50px">
            <VStack w={"md"}>
                <BioLink href="https://www.vadimgouskov.com">{t("WEBSITE")}</BioLink>
                <BioLink href="https://www.otli.io">Otli.io</BioLink>
                <BioLink href="https://github.com/VadimGouskov/p5-projects">
                    {t("P5_SOURCE_CODE")}
                </BioLink>
            </VStack>
        </Center>
    );
};

export default BioLinkList;
