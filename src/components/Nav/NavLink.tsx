import {Link as ChakraLink, LinkProps, useColorModeValue as mode} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

type NavLinkProps = LinkProps & {href: string; isActive?: boolean};

export const NavLink: React.FC<NavLinkProps> = ({href, isActive, ...rest}) => {
    return (
        <Link href={href}>
            <ChakraLink
                display="block"
                py={2}
                px={3}
                borderRadius="md"
                transition="all 0.3s"
                fontWeight="medium"
                lineHeight="1.25rem"
                aria-current={isActive ? "page" : undefined}
                color="white"
                _hover={{bg: "white", color: "black"}}
                _activeLink={{
                    bg: "blue.200",
                    color: "gray.800",
                }}
                {...rest}
            />
        </Link>
    );
};
