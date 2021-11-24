import {Flex, Icon, HStack, Avatar} from "@chakra-ui/react";
import * as React from "react";
import Flags from "country-flag-icons/react/3x2";

export const UserProfile: React.FC = () => {
    const FLAG_SIZE = 8;
    return (
        <>
            <HStack
                spacing={3}
                order={{base: 1, md: 2}}
                flex="1"
                bg="white"
                p="2"
                borderRadius="lg"
            >
                <Flex direction="column">
                    <Icon w={FLAG_SIZE} h={FLAG_SIZE} as={Flags.GB}></Icon>
                </Flex>
                <Flex direction="column">
                    <Icon w={FLAG_SIZE} h={FLAG_SIZE} as={Flags.BE}></Icon>
                </Flex>
                <Flex direction="column">
                    <Icon w={FLAG_SIZE} h={FLAG_SIZE} as={Flags.RU}></Icon>
                </Flex>
                <Flex direction="column">
                    <Icon w={FLAG_SIZE} h={FLAG_SIZE} as={Flags.TR}></Icon>
                </Flex>
            </HStack>
        </>
    );
};
