import {ButtonGroup, ButtonGroupProps, IconButton} from "@chakra-ui/react";
import * as React from "react";
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

export const SocialMediaLinks: React.FC<ButtonGroupProps> = (props) => (
    <ButtonGroup color="white" {...props}>
        <IconButton
            variant="social"
            as="a"
            href="https://www.linkedin.com/in/vadim-gouskov-00aaa2107/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="20px" />}
        />
        <IconButton
            variant="social"
            as="a"
            href="https://github.com/VadimGouskov"
            aria-label="GitHub"
            icon={<FaGithub fontSize="20px" />}
        />
        <IconButton
            variant="social"
            as="a"
            href="https://twitter.com/Vadimgouskovho1"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="20px" />}
        />
        <IconButton
            variant="social"
            as="a"
            href="https://www.instagram.com/vadim.gouskov/"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="20px" />}
        />
    </ButtonGroup>
);
