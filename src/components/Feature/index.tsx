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
import {BsArrowRight} from "react-icons/bs";

type FeatureProps = {
    imageSrc: string;
    title: string;
    alt: string;
    text: string;
    buttonText: string;
    reverse?: boolean;
    imageAlt?: string;
};

const FeatureSection: React.FC<FeatureProps> = (props) => {
    return (
        <Box as="section" py={{md: "12"}}>
            <Box
                bg={mode("black", "gray.800")}
                color={mode("white", "gray.800")}
                maxW={{base: "xl", md: "7xl"}}
                mx="auto"
                px={{base: "6", md: "12", lg: "20"}}
                py={{base: "12", md: "20"}}
                rounded={{base: "0px", md: "30px"}}
            >
                <SimpleGrid columns={{base: 1, md: 2}} spacing="10">
                    <Img
                        htmlWidth="500px"
                        htmlHeight="320px"
                        height={{md: "320px"}}
                        objectFit="cover"
                        src={props.imageSrc}
                        alt={props.imageAlt}
                        order={[0, !!props.reverse ? 1 : 0]}
                    />
                    <Box>
                        <Heading size="xl" mb="4" fontWeight="extrabold">
                            {props.title}
                        </Heading>
                        <Text fontSize={{md: "xl"}} mb="6" maxW="md">
                            {props.text}
                        </Text>
                        <Button
                            size="lg"
                            colorScheme="blue"
                            rightIcon={<BsArrowRight />}
                            fontWeight="bold"
                            fontSize="md"
                            w={{base: "full", sm: "auto"}}
                        >
                            {props.buttonText}
                        </Button>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default FeatureSection;
