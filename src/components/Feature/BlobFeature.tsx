import {
    Box,
    Button,
    Heading,
    Img,
    propNames,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import {useEffect} from "react";
import {BsArrowRight} from "react-icons/bs";

type FeatureProps = {
    title: string;
    text: string;
    buttonText: string;
    buttonHref?: string;
    reverse?: boolean;
    blobClass?: string;
};

const BlobFeature: React.FC<FeatureProps> = ({
    title,
    text,
    buttonText,
    buttonHref = "#",
    reverse = false,
    blobClass,
    children,
}) => {
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
                    <Box order={[0, !!reverse ? 1 : 0]}>{children}</Box>
                    <Box width="100%" position="relative" overflow="visible">
                        <Img
                            position="absolute"
                            top={{base: "-0%", md: "-50%"}}
                            htmlWidth="1000px"
                            htmlHeight="800px"
                            height={{md: "800px"}}
                            src={blobSrc}
                            order={[0, !!reverse ? 1 : 0]}
                            objectFit="contain"
                            zIndex="-1"
                            transform="scale(1.5)"
                        />

                        <Box p="5">
                            <Heading size="2xl" mb="4" fontWeight="extrabold">
                                {title}
                            </Heading>
                            <Text fontSize={{base: "xl", md: "3xl"}} mb="6" maxW="md">
                                {text}
                            </Text>
                            <Link href={buttonHref} passHref>
                                <Button
                                    size="lg"
                                    colorScheme="blue"
                                    rightIcon={<BsArrowRight />}
                                    fontWeight="bold"
                                    fontSize="2xl"
                                    w={{base: "full", sm: "auto"}}
                                    className={blobClass}
                                >
                                    {buttonText}
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default BlobFeature;
