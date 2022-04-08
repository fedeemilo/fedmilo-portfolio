import { STRINGS } from "./strings";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const FOOTER_LINKS = [
    {
        id: "#",
        title: lang => STRINGS.HOME[lang]
    },
    {
        id: "#about",
        title: lang => STRINGS.ABOUT[lang]
    },
    {
        id: "#experience",
        title: lang => STRINGS.EXPERIENCE[lang]
    },
    {
        id: "#services",
        title: lang => STRINGS.SERVICES[lang]
    },
    {
        id: "#portfolio",
        title: lang => STRINGS.PORTFOLIO[lang]
    },
    {
        id: "#testimonials",
        title: lang => STRINGS.TESTIMONIALS[lang]
    },
    {
        id: "#contact",
        title: lang => STRINGS.CONTACT[lang]
    }
];

const FOOTER_SOCIALS = [
    {
        id: "facebook",
        url: "https://www.facebook.com/fmilone1/",
        icon: <FaFacebookF />
    },
    {
        id: "instagram",
        url: "https://www.instagram.com/fedmilo/",
        icon: <FiInstagram />
    }
];

export { FOOTER_LINKS, FOOTER_SOCIALS };
