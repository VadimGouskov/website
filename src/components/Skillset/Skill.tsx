import {Box, Heading, Icon, Text} from "@chakra-ui/react";
import React from "react";
import Emoji from "../Common/Emoji";

type SkillProps = {
    title: string;
    emoji?: string;
    emojiLabel?: string;
};

const Skill: React.FC<SkillProps> = ({title, emoji, emojiLabel, children}) => {
    return (
        <>
            <Box mb="6">
                <Heading size="lg" mb="2">
                    {title} <Emoji symbol={emoji} label={emojiLabel} />
                </Heading>
                {children}
            </Box>
        </>
    );
};

export default Skill;
