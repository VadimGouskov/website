import {Box, Button, Heading, Text, VStack} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import {AiFillInstagram, AiFillLinkedin} from "react-icons/ai";

const Contact: React.FC = () => {
    return (
        <Box
            maxW="2xl"
            mx="auto"
            px={{base: "6", lg: "8"}}
            py={{base: "16", sm: "20"}}
            textAlign="center"
        >
            <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
                Want to work together?
            </Heading>
            <Text mt="4" fontSize="lg">
                Want to talk about a job oportunity, project, collaboration or common interest?
                Contact me and I will get in touch with you asap.
            </Text>
            <VStack>
                <Link href="https://www.linkedin.com/in/vadim-gouskov-00aaa2107/" passHref>
                    <Button
                        leftIcon={<AiFillLinkedin />}
                        mt="8"
                        as="a"
                        size="lg"
                        fontWeight="bold"
                        backgroundColor="#2867B2"
                        color="white"
                        _hover={{color: "#2867B2", backgroundColor: "white"}}
                    >
                        Connect on LinkedIn
                    </Button>
                </Link>

                <Link href="https://www.instagram.com/vadim.gouskov/" passHref>
                    <Button
                        leftIcon={<AiFillInstagram />}
                        mt="8"
                        as="a"
                        size="lg"
                        fontWeight="bold"
                        backgroundColor="#833AB4"
                        color="white"
                        _hover={{color: "#E1306C", backgroundColor: "#FCAF45"}}
                    >
                        Message on Instagram
                    </Button>
                </Link>
            </VStack>
        </Box>
    );
};

export default Contact;
