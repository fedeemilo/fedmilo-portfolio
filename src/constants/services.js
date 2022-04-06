import { STRINGS } from "./strings";

const UX_DESIGN_ITEMS = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
];

const WEB_DEV_ITEMS = [
    {
        id: 1,
        title: "Websites"
    },
    {
        id: 2,
        title: "Online Stores"
    },
    {
        id: 3,
        title: "Web Applications"
    },
    {
        id: 4,
        title: "Content Management Systems"
    },
    {
        id: 5,
        title: "Web Developing Consulting"
    },
    {
        id: 6,
        title: "Custom REST API"
    },
    {
        id: 7,
        title: "BFF With GraphQL"
    }
];

const CONTENT_CREATION_ITEMS = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
];

const SERVICE_ITEMS = [
    {
        id: 1,
        title: lang => STRINGS.UX_DESIGN[lang],
        items: UX_DESIGN_ITEMS
    },
    {
        id: 2,
        title: lang => STRINGS.WEB_DEVELOPMENT[lang],
        items: WEB_DEV_ITEMS
    },
    {
        id: 3,
        title: lang => STRINGS.CONTENT_CREATION[lang],
        items: CONTENT_CREATION_ITEMS
    }
];

export { SERVICE_ITEMS };
