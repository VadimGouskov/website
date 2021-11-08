import {Stack, StackProps} from "@chakra-ui/react";
import * as React from "react";
import {ListItemProps} from "./ListItem";

export const List: React.FC<StackProps> = (props) => {
    const {children, ...stackProps} = props;
    const items = React.useMemo(
        () =>
            React.Children.toArray(children)
                .filter<React.ReactElement<ListItemProps>>(React.isValidElement)
                .map((item, index, array) =>
                    index + 1 === array.length
                        ? React.cloneElement(item, {isLastItem: true})
                        : item,
                ),
        [children],
    );
    return (
        <Stack as="ul" {...stackProps}>
            {items}
        </Stack>
    );
};
