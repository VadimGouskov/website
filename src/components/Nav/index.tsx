import {Box, Center, useColorModeValue as mode} from "@chakra-ui/react";
import * as React from "react";
import {Logo} from "./Logo";
import {Navbar} from "./Navbar";
import {NavLink} from "./NavLink";
import {UserProfile} from "./UserProfile";
import {useRouter} from "next/router";

const Nav: React.FC = () => {
    const SKILLSET_PATH = "skillset";
    const CREATIVE_CODING_PATH = "creative-coding";

    const router = useRouter();

    const getIsActive = (path: string): boolean => {
        return router.pathname.includes(path);
    };

    return (
        <Box /* minH="24rem" bg={mode("gray.50", "gray.700")}*/>
            <Navbar>
                <Navbar.Brand>
                    <Center marginEnd="10">
                        <Logo h="6" iconColor={mode("blue.600", "blue.300")} />
                    </Center>
                </Navbar.Brand>
                <Navbar.Links>
                    <NavLink href="/">Home</NavLink>
                    <NavLink isActive={getIsActive(SKILLSET_PATH)} href={SKILLSET_PATH}>
                        Skillset / CV
                    </NavLink>
                    <NavLink
                        isActive={getIsActive(CREATIVE_CODING_PATH)}
                        href={CREATIVE_CODING_PATH}
                    >
                        Creative Coding
                    </NavLink>
                </Navbar.Links>
                <Navbar.UserProfile>
                    <UserProfile
                        name="Christian Schröter"
                        avatarUrl="https://ca.slack-edge.com/T024F7F15-UJVQ359SP-81fc55875723-512"
                        email="mail@chidori-ui.com"
                    />
                </Navbar.UserProfile>
            </Navbar>
        </Box>
    );
};

export default Nav;
