import PostCollection from "../components/CreativeCoding/PostCollection";
import {Box, Center, Heading, Text, VStack} from "@chakra-ui/react";
import * as React from "react";

interface Props {}

const CreativeCoding: React.FC<Props> = (props) => {
    return (
        <>
            <Box p="5">
                <Center>
                    <Box width={["md"]}>
                        <VStack>
                            <Heading>Creative Coding</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur
                                possimus totam ipsa sit at, quaerat qui voluptatem odit ipsum soluta
                                molestias earum omnis consectetur nostrum sed dicta id assumenda!
                            </Text>
                        </VStack>
                    </Box>
                </Center>
                <PostCollection></PostCollection>
            </Box>
        </>
    );
};

export default CreativeCoding;
