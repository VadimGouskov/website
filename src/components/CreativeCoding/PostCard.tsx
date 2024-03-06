import {Box, Flex, Heading, Img, Text, useColorModeValue as mode} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

interface Props {
    category: string;
    title: string;
    href: string;
    externalLink?: boolean;
    media: string;
    description: string;
}

const PostCard: React.FC<Props> = (props) => {
    const {title, href, description, media, category} = props;

    return (
        <Link href={href} passHref>
            <Box
                as="article"
                bg={{sm: mode("white", "gray.700")}}
                shadow={{sm: "base"}}
                rounded={{sm: "md"}}
                overflow="hidden"
                transition="all 0.2s"
                _hover={{shadow: {sm: "lg"}, cursor: "pointer"}}
            >
                <Flex direction="column">
                    <Img height="60" objectFit="cover" alt={title} src={media} />
                    <Flex direction="column" px={{sm: "6"}} py="5">
                        <Text
                            casing="uppercase"
                            letterSpacing="wider"
                            fontSize="xs"
                            fontWeight="semibold"
                            mb="2"
                            color="gray.500"
                        >
                            {category}
                        </Text>
                        <Heading as="h3" size="sm" mb="2" lineHeight="base">
                            {title}
                        </Heading>
                        <Text noOfLines={4} mb="8" color="gray.600">
                            {description}
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Link>
    );
};

export default PostCard;
