import {Flex, Icon} from "@chakra-ui/react";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import * as React from "react";
type Props = {size: string | number; icon: any; locale?: "en" | "nl-BE"};

const LanguageButton: React.FC<Props> = ({size, icon, locale}) => {
    const {i18n} = useTranslation();
    const router = useRouter();

    const changeLanguage = () => {
        if (!locale) return;

        i18n.changeLanguage(locale);
        const {pathname, asPath, query} = router;
        // change just the locale and maintain all other route information including href's query
        router.push({pathname, query}, asPath, {locale: locale});
    };

    return (
        <Flex direction="column">
            <Icon
                w={size}
                h={size}
                as={icon}
                onClick={changeLanguage}
                _hover={{cursor: !!locale ? "pointer" : ""}}
            ></Icon>
        </Flex>
    );
};

export default LanguageButton;
