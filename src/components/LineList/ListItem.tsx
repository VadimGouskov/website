import {
    Stack,
    Box,
    Flex,
    Circle,
    Text,
    useColorModeValue,
    Heading,
    StackProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface ListItemProps extends StackProps {
    title: string;
    subTitle?: string;
    icon?: React.ReactElement;
    isLastItem?: boolean;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
    const {title, subTitle, icon, isLastItem, children, ...stackProps} = props;

    return (
        <Stack as="li" direction="row" spacing="4" {...stackProps}>
            <Flex direction="column" alignItems="center" aria-hidden="true">
                <Circle
                    bg={useColorModeValue("blue.500", "blue.300")}
                    size="12"
                    borderWidth="4px"
                    borderColor={useColorModeValue("white", "gray.800")}
                    color={useColorModeValue("white", "black")}
                >
                    {icon}
                </Circle>
                {!isLastItem && <Flex flex="1" borderRightWidth="1px" mb="-12" />}
            </Flex>
            <Stack spacing="4" pt="1" flex="1">
                <Flex direction="column">
                    <Heading fontSize="md" fontWeight="semibold">
                        {title}
                    </Heading>
                    <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                        {subTitle}
                    </Text>
                </Flex>
                <Flex>
                    <Box bg="gray.50" width="full" rounded="2xl" p="4">
                        <Text fontSize="lg" textColor="gray.800">
                            {children}
                        </Text>
                    </Box>
                </Flex>
            </Stack>
        </Stack>
    );
};
