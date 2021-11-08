import {Box, Heading, Icon, Text} from "@chakra-ui/react";
import React from "react";

type SkillProps = {
    title: string;
    icon?: React.ElementType;
};

const Skill: React.FC<SkillProps> = ({title, icon, children}) => {
    return (
        <>
            <Box mb="4">
                <Heading size="lg" mb="0">
                    {title} {!!icon ? <Icon as={icon}></Icon> : ""}
                </Heading>
                <Text textColor="gray.800">{children}</Text>
            </Box>
        </>
    );
};

export default Skill;
