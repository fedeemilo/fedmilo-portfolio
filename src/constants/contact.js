import emailjs from "emailjs-com";
import { STRINGS } from "./strings";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const EMAIL_PROMISE = form =>
    emailjs.sendForm(
        "service_8rskees",
        "template_jgp6fog",
        form.current,
        "_m5_aiiADdy809JFg"
    );

const TOAST_PROMISE_OPTIONS = lang => ({
    loading: STRINGS.LOADING[lang],
    success: STRINGS.FORM_SUCCESS[lang],
    error: STRINGS.FORM_ERROR[lang]
});

const TOAST_OPTIONS = {
    style: {
        minWidth: "8rem",
        backgroundColor: "#2c2c6c",
        color: "#fff"
    },
    position: "top-right",
    duration: 4000,
    success: {
        icon: "✅"
    },
    error: {
        icon: "❌"
    },
    loading: {
        icon: "🕜"
    }
};

const CONTACT_OPTIONS = [
    {
        id: 1,
        icon: <MdOutlineEmail className="contact__option-icon" />,
        option: "Email",
        value: "fedeemilo01@gmail.com",
        text: lang => STRINGS.SEND_A_MESSAGE[lang],
        href: "mailto:fedeemilo91@gmail.com"
    },
    {
        id: 2,
        icon: <RiMessengerLine className="contact__option-icon" />,
        option: "Messenger",
        value: "Federico Milone",
        text: lang => STRINGS.SEND_A_MESSAGE[lang],
        href: "https://m.me/fmilone1"
    },
    {
        id: 3,
        icon: <BsWhatsapp className="contact__option-icon" />,
        option: "Whatsapp",
        value: "2213080328",
        text: lang => STRINGS.SEND_A_MESSAGE[lang],
        href: "https://api.whatsapp.com/send?phone=+5492213080328"
    }
];


export {
    TOAST_OPTIONS,
    TOAST_PROMISE_OPTIONS,
    EMAIL_PROMISE,
    CONTACT_OPTIONS
};
