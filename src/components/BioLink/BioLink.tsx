import * as React from "react";

import {Box, Link} from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
    href: string;
};

const BioLink: React.FC<Props> = ({href, children}) => {
    return (
        <>
            <NextLink href={href} passHref>
                <Box
                    rounded="md"
                    backgroundColor="gray.200"
                    w="100%"
                    textAlign="center"
                    p="2"
                    fontSize="xl"
                >
                    {children}
                </Box>
            </NextLink>
        </>
    );
};

export default BioLink;
