import {
    Box,
    chakra,
    HTMLChakraProps,
    Link as ChakraLink,
    useColorModeValue,
    useToken,
} from "@chakra-ui/react";
import * as React from "react";

const FooterText: React.FC<HTMLChakraProps<"svg">> = (props) => {
    const [white, black] = useToken("colors", ["white", "gray.800"]);
    return (
        <Box>
            This website is built using amazing tools like:&nbsp;
            <ChakraLink href="https://nextjs.org/" isExternal>
                Next.js
            </ChakraLink>
            ,&nbsp;
            <ChakraLink href="https://chakra-ui.com/" isExternal>
                Chakra UI
            </ChakraLink>
            ,&nbsp;
            <ChakraLink href="https://www.i18next.com/" isExternal>
                i18next
            </ChakraLink>
            ,&nbsp;
            <ChakraLink href="https://haikei.app/" isExternal>
                Haikei
            </ChakraLink>
            &nbsp; and many more. Thanks to everyone involved!
        </Box>
    );
};

export default FooterText;
