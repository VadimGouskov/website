import * as React from "react";
import {AiOutlineCoffee, AiOutlineSketch, AiOutlineWoman} from "react-icons/ai";
import {FaGraduationCap} from "react-icons/fa";

import {Box, Icon, Text} from "@chakra-ui/react";
import {List} from "./List";
import {ListItem} from "./ListItem";
import {useTranslation} from "next-i18next";

export const LineList: React.FC = () => {
    const {t} = useTranslation("skillset");

    return (
        <Box as="section">
            <Box maxW="2xl" mx="auto" p={{base: "4", md: "8"}}>
                <List spacing="12">
                    <ListItem
                        title={t("TIMELINE_UNIVERSITY_TITLE")}
                        icon={<Icon as={FaGraduationCap} boxSize="6" />}
                    >
                        {t("TIMELINE_UNIVERSITY_TEXT")}
                    </ListItem>
                    <ListItem
                        title={t("TIMELINE_DELEN_TITLE")}
                        icon={<Icon as={AiOutlineWoman} boxSize="6" />}
                    >
                        {t("TIMELINE_DELEN_TEXT")}
                    </ListItem>
                    <ListItem
                        title={t("TIMLINE_TRAINING_TITLE")}
                        icon={<Icon as={AiOutlineSketch} boxSize="6" />}
                    >
                        {t("TIMLINE_TRAINING_TEXT")}
                    </ListItem>

                    <ListItem
                        title={t("TIMELINE_FUTURE_TITLE")}
                        icon={<Icon as={AiOutlineSketch} boxSize="6" />}
                    >
                        {t("TIMELINE_FUTURE_TEXT")}
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};
