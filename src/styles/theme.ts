// 1. Import `extendTheme`
import {extendTheme} from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
    colors: {
        primary: "#0E113D",
    },
    fontSizes: {
        title: "40px",
    },
    space: {
        sm: "0.5rem",
        md: "1.0rem", // "16px"
        lg: "1.5rem",
        xl: "2.0rem",
        x2: "4rem",
    },
    components: {
        Text: {baseStyle: {fontSize: "20px"}},
        Heading: {baseStyle: {marginBottom: "md"}},
        Link: {baseStyle: {textDecoration: "none", fontWeight: "bold"}},
        Button: {
            variants: {
                social: {
                    bg: "transparent",
                    color: "white",
                },
            },
        },
    },
});

export default theme;
