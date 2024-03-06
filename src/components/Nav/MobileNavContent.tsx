import {CloseButton, Flex} from "@chakra-ui/react";
import * as React from "react";

interface Props {
    isOpen?: boolean;
    onClose?: () => void;
}

export const MobileNavContent: React.FC<Props> = (props) => {
    const {isOpen, onClose, children} = props;

    if (!isOpen) return <></>;

    return (
        <Flex
            direction="column"
            w="100%"
            bg="black"
            color="white"
            h="100vh"
            overflow="auto"
            pos="absolute"
            top={0}
            left={0}
            zIndex={20}
            px={4}
            py={4}
        >
            {children}
            <CloseButton pos="absolute" top={4} right={4} onClick={onClose} />
        </Flex>
    );
};
