import Layout from "../components/Layout";
import {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../styles/theme";
import React from "react";
import "../styles/main.css";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
};

export default App;
