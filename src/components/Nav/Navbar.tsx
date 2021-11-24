import React, {isValidElement, ReactElement} from "react";
import {
    Divider,
    Flex,
    HStack,
    IconButton,
    Spacer,
    Stack,
    useColorModeValue,
    useDisclosure,
    UseDisclosureProps,
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {MobileNavContent} from "./MobileNavContent";

type Props = {
    disclosure: UseDisclosureProps;
};

export const Template: React.FC<Props> = (props) => {
    const children = React.Children.toArray(props.children).filter<ReactElement>(isValidElement);
    return (
        <Flex
            p={4}
            px={{base: 4, md: 6, lg: 8}}
            bg={useColorModeValue("black", "white")}
            boxShadow={useColorModeValue("md", "none")}
            borderBottomWidth={useColorModeValue("none", "1px")}
            pos="relative"
            zIndex={10}
            // HACK: remove space between this element and wave svg
            mb="-4px"
        >
            {children.find((child) => child.type === Brand)?.props.children}

            <HStack spacing={3} display={{base: "none", md: "flex"}}>
                {children.find((child) => child.type === Links)?.props.children}
            </HStack>
            <Spacer />
            <HStack display={{base: "none", md: "flex"}} spacing={3}>
                {children.find((child) => child.type === UserProfile)?.props.children}
            </HStack>

            <IconButton
                display={{base: "flex", md: "none"}}
                size="sm"
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                bg="transparent"
                onClick={props.disclosure.onOpen}
                icon={<HamburgerIcon />}
            />

            <MobileNavContent isOpen={props.disclosure.isOpen} onClose={props.disclosure.onClose}>
                <Stack spacing={5}>
                    <Flex>{children.find((child) => child.type === Brand)?.props.children}</Flex>
                    <Stack>{children.find((child) => child.type === Links)?.props.children}</Stack>
                    <Divider />
                    <Flex>
                        {children.find((child) => child.type === UserProfile)?.props.children}
                    </Flex>
                </Stack>
            </MobileNavContent>
        </Flex>
    );
};

const Brand: React.FC = () => null;
const Links: React.FC = () => null;
const UserProfile: React.FC = () => null;

export const Navbar = Object.assign(Template, {Brand, Links, UserProfile});
