import {Flex, Icon, HStack, Avatar} from "@chakra-ui/react";
import * as React from "react";
import Flags from "country-flag-icons/react/3x2";
import LanguageButton from "./LanguageButton";

const LanguageSelection: React.FC = () => {
    const FLAG_SIZE = 8;
    return (
        <>
            <HStack
                spacing={3}
                order={{base: 1, md: 2}}
                flex="1"
                bg="white"
                p="2"
                borderRadius="lg"
            >
                <LanguageButton size={FLAG_SIZE} icon={Flags.GB} locale="en"></LanguageButton>
                <LanguageButton size={FLAG_SIZE} icon={Flags.BE} locale="nl-BE"></LanguageButton>
                {/*
                <LanguageButton size={FLAG_SIZE} icon={Flags.RU}></LanguageButton>
                <LanguageButton size={FLAG_SIZE} icon={Flags.TR}></LanguageButton>
               */}
            </HStack>
        </>
    );
};

export default LanguageSelection;
