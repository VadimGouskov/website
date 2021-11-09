import BioLink from "../components/BioLink/BioLink";
import {Box, Center, Heading, VStack} from "@chakra-ui/react";
import * as React from "react";
import BioLinkList from "../components/BioLink/BioLinkList";
import {SocialMediaLinks} from "../components/Footer/SocialMediaLinks";

interface Props {}

const Bio: React.FC<Props> = (props) => {
    return (
        <>
            <Box h="80vh">
                <Heading textAlign="center" fontSize="5xl">
                    Vadim Gouskov
                </Heading>
                <BioLinkList></BioLinkList>
                <Center mt="4">
                    <SocialMediaLinks></SocialMediaLinks>
                </Center>
            </Box>
        </>
    );
};

export default Bio;
