import { STRINGS } from "./strings";

const FORM_ELEMENTS = lang => [
    {
        typeElem: "input",
        type: "text",
        name: "name",
        placeholder: STRINGS.YOUR_FULL_NAME[lang],
        required: true
    },
    {
        typeElem: "input",
        type: "email",
        name: "email",
        placeholder: STRINGS.YOUR_EMAIL[lang],
        required: true
    },
    {
        typeElem: "textarea",
        type: "text",
        name: "message",
        placeholder: STRINGS.YOUR_MESSAGE[lang],
        required: true,
        rows: "7"
    }
];

export { FORM_ELEMENTS };
