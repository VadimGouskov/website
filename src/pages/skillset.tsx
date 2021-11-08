import {LineList} from "../components/LineList";
import * as React from "react";
import {Box, Heading, Text, Button, UnorderedList, ListItem, Icon} from "@chakra-ui/react";
import Flags from "country-flag-icons/react/3x2";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import Skill from "../components/Skillset/Skill";

interface Props {}

const Skillset: React.FC<Props> = (props) => {
    return (
        <>
            {/* TIMELINE */}
            <LineList></LineList>

            {/* SKILLSET */}
            <Box as="section">
                <Box
                    maxW="2xl"
                    mx="auto"
                    px={{base: "6", lg: "8"}}
                    py={{base: "16", sm: "20"}}
                    textAlign="left"
                >
                    <Heading size="xl"> WebDev SkillSet </Heading>
                    <Skill title="Building WebApps" icon={Flags.US}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nemo dicta
                        adipisci, animi eveniet enim sed illum asperiores! Assumenda expedita
                        corrupti voluptatibus quo odio porro sed, a voluptate. Deserunt,
                        exercitationem.
                    </Skill>

                    <Skill title="Styling">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nemo dicta
                        adipisci, animi eveniet enim sed illum asperiores! Assumenda expedita
                        corrupti voluptatibus quo odio porro sed, a voluptate. Deserunt,
                        exercitationem.
                    </Skill>

                    <Heading size="xl"> Other Skills </Heading>

                    <Heading>Languages</Heading>
                    <Text>{getUnicodeFlagIcon("BE")} Dutch: Native</Text>
                    <Text>{getUnicodeFlagIcon("GB")} English: Advanced</Text>
                    <Text>{getUnicodeFlagIcon("RU")} Russian: Intermediate </Text>
                    <Text>{getUnicodeFlagIcon("TR")} Turkish: Beginner</Text>
                </Box>
            </Box>

            {/* OTHER SKILLS */}

            {/* CALL TO ACTION */}
            <Box as="section">
                <Box
                    maxW="2xl"
                    mx="auto"
                    px={{base: "6", lg: "8"}}
                    py={{base: "16", sm: "20"}}
                    textAlign="center"
                >
                    <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
                        Want to work together?
                    </Heading>
                    <Text mt="4" fontSize="lg">
                        Want to talk about a job oportunity, project, collaboration or common
                        interest? Contact me and I will get in touch with you asap.
                    </Text>
                    <Button mt="8" as="a" href="#" size="lg" colorScheme="blue" fontWeight="bold">
                        Contact
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Skillset;
