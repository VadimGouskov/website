import {Box, Center, useColorModeValue as mode, useDisclosure} from "@chakra-ui/react";
import * as React from "react";
import {Navbar} from "./Navbar";
import {NavLink} from "./NavLink";
import LanguageSelection from "./LanguageSelection";
import {useRouter} from "next/router";
import {WaveSpacer} from "../Common/WaveSpacer";

const Nav: React.FC = () => {
    const ABOUT_ME_PATH = "about-me";
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
                        isActive={getIsActive(ABOUT_ME_PATH)}
                        href={ABOUT_ME_PATH}
                        onClick={disclosure.onClose}
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        isActive={getIsActive(CREATIVE_CODING_PATH)}
                        href={CREATIVE_CODING_PATH}
                        onClick={disclosure.onClose}
                    >
                        Creative Coding
                    </NavLink>
                    <NavLink href={`${ABOUT_ME_PATH}#contact-section`} onClick={disclosure.onClose}>
                        Contact
                    </NavLink>
                </Navbar.Links>
                <Navbar.UserProfile>
                    <LanguageSelection />
                </Navbar.UserProfile>
            </Navbar>
            <WaveSpacer imageHref="assets/hero-wave.svg" offsetY={-40} />
        </Box>
    );
};

export default Nav;
