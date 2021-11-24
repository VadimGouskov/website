import {Box, Center, useColorModeValue as mode, useDisclosure} from "@chakra-ui/react";
import * as React from "react";
import {Navbar} from "./Navbar";
import {NavLink} from "./NavLink";
import {UserProfile} from "./UserProfile";
import {useRouter} from "next/router";
import {WaveSpacer} from "../Common/WaveSpacer";

const Nav: React.FC = () => {
    const SKILLSET_PATH = "skillset";
    const CREATIVE_CODING_PATH = "creative-coding";

    const router = useRouter();

    const getIsActive = (path: string): boolean => {
        return router.pathname.includes(path);
    };

    const disclosure = useDisclosure();

    return (
        <Box>
            <Navbar disclosure={disclosure}>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Links>
                    <NavLink href="/" onClick={disclosure.onClose}>
                        Home
                    </NavLink>
                    <NavLink
                        isActive={getIsActive(SKILLSET_PATH)}
                        href={SKILLSET_PATH}
                        onClick={disclosure.onClose}
                    >
                        Skillset / CV
                    </NavLink>
                    <NavLink
                        isActive={getIsActive(CREATIVE_CODING_PATH)}
                        href={CREATIVE_CODING_PATH}
                        onClick={disclosure.onClose}
                    >
                        Creative Coding
                    </NavLink>
                    <NavLink href={`${SKILLSET_PATH}#contact-section`} onClick={disclosure.onClose}>
                        Contact
                    </NavLink>
                </Navbar.Links>
                <Navbar.UserProfile>
                    <UserProfile />
                </Navbar.UserProfile>
            </Navbar>
            <WaveSpacer imageHref="assets/hero-wave.svg" offsetY={-40} />
        </Box>
    );
};

export default Nav;
