import {Box} from "@chakra-ui/react";

import {Text, TextProps} from "@chakra-ui/layout";
import * as React from "react";

type Props = {
    imageHref?: string;
    height?: string;
    offsetY?: number | string;
    bgColor?: string;
};

export const WaveSpacer: React.FC<Props> = ({
    imageHref = "assets/bottom-wave.svg",
    offsetY = "-2px",
    bgColor = "transparent",
    height = "100px",
}) => {
    return (
        <Box
            backgroundColor={bgColor}
            className="spacer-svg bottom-svg"
            transform={`translate(0px, ${offsetY})`}
            backgroundImage={`url(${imageHref})`}
            zIndex={-10}
            height={height}
        ></Box>
    );
};
