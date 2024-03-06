import Layout from "../components/Layout";
import {AppProps} from "next/app";
import Head from "next/head";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../styles/theme";
import React from "react";
import {SSRConfig, appWithTranslation} from "next-i18next";
import "../styles/main.css";
import {useRouter} from "next/router";

import * as Fathom from "fathom-client";

const App: React.FC<AppProps<SSRConfig>> = ({Component, pageProps}) => {
    const router = useRouter();

    React.useEffect(() => {
        //  - Do not include https://
        //  - This must be an exact match of your domain.
        //  - If you're using www. for your domain, make sure you include that here.
        Fathom.load("EEGISLNF", {
            includedDomains: ["vadimgouskov.com", "www.vadimgouskov.com"],
        });

        function onRouteChangeComplete() {
            Fathom.trackPageview();
        }
        // Record a pageview when route changes
        router.events.on("routeChangeComplete", onRouteChangeComplete);

        // Unassign event listener
        return () => {
            router.events.off("routeChangeComplete", onRouteChangeComplete);
        };
    }, []);

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
                </Layout>
            </ChakraProvider>
        </>
    );
};

export default appWithTranslation(App);
