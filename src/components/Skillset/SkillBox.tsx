import {Box, Text} from "@chakra-ui/react";
import * as React from "react";
type Props = {};

const SkillBox: React.FC<Props> = ({children}) => {
    return (
        <Box mt="4" backgroundColor="gray.50" rounded="10px" p={{base: "4", md: "6"}}>
            <Text textColor="gray.800">{children}</Text>
        </Box>
    );
};

export default SkillBox;
