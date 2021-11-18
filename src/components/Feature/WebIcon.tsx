import {Box, Img, propNames} from "@chakra-ui/react";
import * as React from "react";
type Props = {
    imgSrc: string;
    offsetX?: string;
    offsetY?: string;
};

const WebIcon: React.FC<Props> = ({imgSrc, offsetX = "0px", offsetY = "0px"}) => {
    return (
        <Box
            width="33%"
            rounded="100%"
            position="absolute"
            left={offsetX}
            top={offsetY}
            transform="translate(-50%, -50%)"
            backgroundColor="white"
            border="1px solid red"
            allignItems="center"
            // We want the height to be equal to the width  https://mademyday.de/height-equals-width-with-pure-css/
            _before={{content: "''", float: "left", paddingTop: "100%"}}
        >
            <Img
                aspectRatio={1 / 1}
                htmlWidth="90%"
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
