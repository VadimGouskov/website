import * as React from "react";
import {AiOutlineCoffee, AiOutlineSketch, AiOutlineWoman} from "react-icons/ai";
import {FaGraduationCap} from "react-icons/fa";

import {Box, Icon, Text} from "@chakra-ui/react";
import {List} from "./List";
import {ListItem} from "./ListItem";

export const LineList: React.FC = () => {
    return (
        <Box as="section">
            <Box maxW="2xl" mx="auto" p={{base: "4", md: "8"}}>
                <List spacing="12">
                    <ListItem
                        title="2019 | Graduated as Master of Science in Industrial Engineering ICT"
                        icon={<Icon as={FaGraduationCap} boxSize="6" />}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                        similique nostrum nihil ipsa, doloribus neque deserunt amet voluptas commodi
                        consectetur voluptate fugiat corrupti, consequuntur itaque expedita dolorem
                        rerum perferendis libero!
                    </ListItem>
                    <ListItem
                        title="2019 - 2021 | Web developer at Delen Private Bank"
                        icon={<Icon as={AiOutlineWoman} boxSize="6" />}
                    >
                        large projects, angular, dotnet, full development and deployment process,...
                        teamwork, work closesly with designers and business
                    </ListItem>
                    <ListItem
                        title="2021 - 2022 | training, projects ..."
                        icon={<Icon as={AiOutlineSketch} boxSize="6" />}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                        similique nostrum nihil ipsa, doloribus neque deserunt amet voluptas commodi
                        consectetur voluptate fugiat corrupti, consequuntur itaque expedita dolorem
                        rerum perferendis libero!
                    </ListItem>

                    <ListItem
                        title="2022 | New exciting projects with you?"
                        icon={<Icon as={AiOutlineSketch} boxSize="6" />}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                        similique nostrum nihil ipsa, doloribus neque deserunt amet voluptas commodi
                        consectetur voluptate fugiat corrupti, consequuntur itaque expedita dolorem
                        rerum perferendis libero!
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};
