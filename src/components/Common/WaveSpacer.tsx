import {Box, compose} from "@chakra-ui/react";

import {Text, TextProps} from "@chakra-ui/layout";
import * as React from "react";

type Props = {
    svgName: string;
    offsetY?: number | string;
    bgColor?: string;
};

export const WaveSpacer: React.FC<Props> = ({
    svgName,
    offsetY = "-2px",
    bgColor = "transparent",
}) => (
    <Box
        backgroundColor={bgColor}
        className={`spacer-svg ${svgName}`}
        transform={`translate(0px, ${offsetY})`}
        zIndex={-10}
    ></Box>
);
