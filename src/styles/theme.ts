// 1. Import `extendTheme`
import {baseStyle, extendTheme} from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
    colors: {
        primary: "#0E113D",
    },
    fontSizes: {
        title: "40px",
    },
    space: {
        spacer: "1.0rem",
        "spacer-x2": "2.0rem",
        padding: "1.0rem",
    },
    components: {
        Text: {baseStyle: {fontSize: "20px"}},
        Heading: {baseStyle: {marginBottom: "spacer"}},
        Link: {baseStyle: {textDecoration: "none", fontWeight: "bold"}},
        Button: {
            variants:{
                "social": {
                    bg:"transparent",
                    color:"white",   
                }
            }
        }
    },
});

export default theme;
