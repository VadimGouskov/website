import Hero from "../components/Hero";
import React from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticPropsResult} from "next";
import {useTranslation} from "next-i18next";
import {Box, Img} from "@chakra-ui/react";
import WebDevelopment from "../components/Home/WebDevelopment";
import CreativeCoding from "../components/Home/CreativeCoding";
import Otli from "../components/Home/Otli";

const IndexPage: React.FC = () => {
    const {t} = useTranslation("index");

    return (
        <>
            <Hero></Hero>
            <Box overflowX={{base: "hidden", lg: "visible"}}>
                <WebDevelopment></WebDevelopment>
                <CreativeCoding></CreativeCoding>
                <Otli></Otli>
            </Box>
        </>
    );
};

export default IndexPage;

export async function getStaticProps({locale}): Promise<GetStaticPropsResult<any>> {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["index"])),
        },
    };
}
