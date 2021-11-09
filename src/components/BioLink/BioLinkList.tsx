import * as React from "react";

import {Center, VStack} from "@chakra-ui/react";
import BioLink from "./BioLink";
import Link from "next/link";

type Props = {};

const BioLinkList: React.FC<Props> = () => {
    return (
        <Center mt="50px">
            <VStack w={"md"}>
                <BioLink href="https://www.vadimgouskov.com">Website</BioLink>
                <BioLink href="https://www.otli.io">Otli.io</BioLink>
                <BioLink href="https://github.com/VadimGouskov/p5-projects">P5 source code</BioLink>
            </VStack>
        </Center>
    );
};

export default BioLinkList;
