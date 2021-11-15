import Hero from "../components/Hero";
import React from "react";
import Feature from "../components/Feature";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticPropsResult} from "next";
import {useTranslation} from "next-i18next";

const Index: React.FC = () => {
    const {t} = useTranslation("index");

    return (
        <>
            <Hero></Hero>
            <Feature
                title={t("FEATURE_WEB_DEVELOPMENT_TITLE")}
                text={t("FEATURE_WEB_DEVELOPMENT_TEXT")}
                alt="TODO"
                buttonText={t("FEATURE_WEB_DEVELOPMENT_BUTTON")}
                imageSrc="https://images.unsplash.com/photo-1534949752991-a065b0f5dfaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYxfHxkZXZpY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            ></Feature>

            <Feature
                reverse
                title={t("FEATURE_CREATIVE_CODING_TITLE")}
                text={t("FEATURE_CREATIVE_CODING_TEXT")}
                alt="TODO"
                buttonText={t("FEATURE_CREATIVE_CODING_BUTTON")}
                imageSrc="https://images.unsplash.com/photo-1534949752991-a065b0f5dfaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYxfHxkZXZpY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            ></Feature>

            <Feature
                title={t("FEATURE_OTLI_TITLE")}
                text={t("FEATURE_OTLI_TEXT")}
                alt="TODO"
                buttonText={t("FEATURE_OTLI_BUTTON")}
                imageSrc="https://images.unsplash.com/photo-1534949752991-a065b0f5dfaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYxfHxkZXZpY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            ></Feature>
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
