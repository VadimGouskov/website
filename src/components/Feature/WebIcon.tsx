import {Box, Img, propNames, ResponsiveValue} from "@chakra-ui/react";
import * as React from "react";
import * as CSS from "csstype";

type Props = {
    imgSrc: string;
    animationClass:
        | "webdev-icon--center"
        | "webdev-icon--top-left"
        | "webdev-icon--top-right"
        | "webdev-icon--bottom-right"
        | "webdev-icon--bottom-left";
    offsetX?: string;
    offsetY?: string | ResponsiveValue<CSS.Property.Top<string | number>>;
    logoWidth?: string;
    rounded?: string;
};

const WebIcon: React.FC<Props> = ({
    imgSrc,
    animationClass,
    offsetX = "0px",
    offsetY = "0px",
    logoWidth = "85%",
    rounded = "100%",
}) => {
    return (
        <Box
            className={`webdev-animate ${animationClass}`}
            width="33%"
            rounded={rounded}
            position="absolute"
            left={offsetX}
            top={offsetY}
            transform="translate(-50%, -50%)"
            backgroundColor="white"
            boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            allignItems="center"
            // We want the height to be equal to the width  https://mademyday.de/height-equals-width-with-pure-css/
            _before={{content: "''", float: "left", paddingTop: "100%"}}
        >
            <Img
                aspectratio={1 / 1}
                htmlWidth={logoWidth}
                //height={{md: "100px"}}
                objectFit="contain"
                src={imgSrc}
                alt="TODO"
                //
                position="absolute"
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
            />
        </Box>
    );
};

export default WebIcon;
