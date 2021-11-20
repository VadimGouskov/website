import {Box, Stack} from "@chakra-ui/react";
import * as React from "react";
import {WaveSpacer} from "../Common/WaveSpacer";
import {Copyright} from "./Copyright";
import FooterText from "./FooterText";
import {SocialMediaLinks} from "./SocialMediaLinks";
import {useRouter} from "next/router";

const Footer: React.FC = () => {
    const router = useRouter();

    // HACK: fix wavespacers in CSS later
    const showSecondaryWave = () => {
        return !router.pathname.includes("skillset");
    };

    return (
        <>
            {showSecondaryWave() && (
                <WaveSpacer svgName="bottom-svg2" bgColor="transparent"></WaveSpacer>
            )}
            <WaveSpacer svgName="bottom-svg" bgColor="gray.50"></WaveSpacer>
            <Box
                as="footer"
                role="contentinfo"
                mx="auto"
                maxW="100%"
                pb="12"
                px={{base: "4", md: "8"}}
                backgroundColor="black"
                color="white"
                // HACK: remove space between this element and wave svg
                mt="-4px"
            >
                <Stack>
                    <Stack
                        direction={{base: "column", sm: "row"}}
                        spacing="4"
                        align="center"
                        justify="space-between"
                    >
                        <SocialMediaLinks />
                        <FooterText />
                    </Stack>
                    <Copyright alignSelf={{base: "center", sm: "start"}} />
                </Stack>
            </Box>
        </>
    );
};

export default Footer;
