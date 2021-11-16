import {chakra, HTMLChakraProps, useColorModeValue, useToken} from "@chakra-ui/react";
import * as React from "react";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
    const [white, black] = useToken("colors", ["white", "gray.800"]);
    return (
        <>
            This website is built using amazing tools like: Next.js, ChakraUi, i18next and many more
            (link to packajge .json?). Thanks to everybody envolved in these projects!
        </>
    );
};
