import {
    Box,
    Button,
    Heading,
    Img,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import {useEffect} from "react";
import {BsArrowRight} from "react-icons/bs";

type FeatureProps = {
    title: string;
    text: string;
    buttonText: string;
    reverse?: boolean;
};

const BlobFeature: React.FC<FeatureProps> = (props) => {
    const blobSrc = "assets/blob3.svg";

    return (
        <Box as="section" mb="20" py={{md: "24"}}>
            <Box
                bg={mode("transparent", "gray.800")}
                color={mode("white", "gray.800")}
                maxW={{base: "xl", md: "7xl"}}
                mx="auto"
                px={{base: "6", md: "12", lg: "20"}}
                py={{base: "12", md: "20"}}
                rounded={{base: "0px", md: "30px"}}
                overflow="visible"
            >
                <SimpleGrid columns={{base: 1, md: 2}} spacing="10">
                    <Box order={[0, !!props.reverse ? 1 : 0]}>{props.children}</Box>
                    <Box width="100%" position="relative" overflow="visible">
                        <Img
                            position="absolute"
                            top={{base: "-0%", md: "-50%"}}
                            htmlWidth="1000px"
                            htmlHeight="800px"
                            height={{md: "800px"}}
                            src={blobSrc}
                            order={[0, !!props.reverse ? 1 : 0]}
                            objectFit="contain"
                            zIndex="-1"
                            transform="scale(1.5)"
                        />

                        <Box p="5">
                            <Heading size="2xl" mb="4" fontWeight="extrabold">
                                {props.title}
                            </Heading>
                            <Text fontSize={{base: "xl", md: "3xl"}} mb="6" maxW="md">
                                {props.text}
                            </Text>
                            <Button
                                size="lg"
                                colorScheme="blue"
                                rightIcon={<BsArrowRight />}
                                fontWeight="bold"
                                fontSize="2xl"
                                w={{base: "full", sm: "auto"}}
                            >
                                {props.buttonText}
                            </Button>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default BlobFeature;
