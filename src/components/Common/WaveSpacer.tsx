import {Box, compose} from "@chakra-ui/react";

import {Text, TextProps} from "@chakra-ui/layout";
import * as React from "react";

type Props = {
    offsetY?: number;
};

export const WaveSpacer: React.FC<Props> = ({offsetY = -2}) => (
    <Box
        className="spacer-svg hero-svg"
        transform={`translate(0px, ${offsetY}px)`}
        zIndex={-10}
    ></Box>
);
