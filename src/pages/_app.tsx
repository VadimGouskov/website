import Layout from "../components/Layout";
import {AppProps} from "next/app";
import Head from "next/head";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../styles/theme";
import React from "react";
import {appWithTranslation} from "next-i18next";
import "../styles/main.css";
import {Analytics} from "@vercel/analytics/react";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Vadim Gouskov | Web Developer &amp; Creative Coder</title>
                <meta
                    property="description"
                    content="I am Vadim: I love web development and creative coding. Combining those two passions I like to build things that are useful and beautiful. I also created a browser extension called Otli.io to help people avoid distracting content on the web."
                    key="app-description"
                ></meta>
                <meta property="charset" content="UTF-8"></meta>
                <meta
                    property="og:title"
                    content="Vadim Gouskov | Web Developer &amp; Creative Coder"
                ></meta>
                <meta
                    property="og:description"
                    content="I am Vadim: I love web development and creative coding. Combining those two passions I like to build things that are useful and/or beautiful. I also created a browser extension called Otli.io to help people avoid distracting content on the web."
                ></meta>
                <meta
                    property="og:image"
                    content="https://vadim.li/assets/vadim-gouskov-og-image.jpg"
                ></meta>
            </Head>

            <ChakraProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                    <Analytics />
                </Layout>
            </ChakraProvider>
        </>
    );
};

export default appWithTranslation(App);
