import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../styles/theme";

const Index: React.FC = () => {
    return(
        <ChakraProvider theme={theme}>
            <h1>Home</h1>
        </ChakraProvider>        
    );

}

export default Index;
