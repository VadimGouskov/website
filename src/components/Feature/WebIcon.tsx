import {Box, Img, propNames} from "@chakra-ui/react";
import * as React from "react";
type Props = {
    imgSrc: string;
    offsetX?: string;
    offsetY?: string;
    logoWidth?: string;
    rounded?: string;
};

const WebIcon: React.FC<Props> = ({
    imgSrc,
    offsetX = "0px",
    offsetY = "0px",
    logoWidth = "85%",
    rounded = "100%",
}) => {
    return (
        <Box
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
                aspectRatio={1 / 1}
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
