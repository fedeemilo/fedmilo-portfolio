import { STRINGS } from "./strings";

const UX_DESIGN_ITEMS = [
    {
        id: 1,
        title: lang => STRINGS.USER_STORIES[lang]
    },
    {
        id: 2,
        title: lang => STRINGS.WIREFRAMES[lang]
    },
    {
        id: 3,
        title: lang => STRINGS.CONTENT_STRATEGY[lang]
    },
    {
        id: 4,
        title: lang => STRINGS.USER_FLOW_CHARTS[lang]
    },
    {
        id: 5,
        title: lang => STRINGS.PRODUCT_DESIGN[lang]
    },
    {
        id: 6,
        title: lang => STRINGS.USER_EXP_CONSULTING[lang]
    }
];

const WEB_DEV_ITEMS = [
    {
        id: 1,
        title: lang => STRINGS.WEBSITES[lang]
    },
    {
        id: 2,
        title: lang => STRINGS.ONLINE_STORES[lang]
    },
    {
        id: 3,
        title: lang => STRINGS.WEB_APPLICATIONS[lang]
    },
    {
        id: 4,
        title: lang => STRINGS.CMS[lang]
    },
    {
        id: 5,
        title: lang => STRINGS.WEB_DEV_CONSULTING[lang]
    },
    {
        id: 6,
        title: lang => STRINGS.CUSTOM_REST_API[lang]
    }
    // {
    //     id: 7,
    //     title: lang => STRINGS.BFF_WITH_GRAHPQL[lang]
    // }
];

const CONTENT_CREATION_ITEMS = [
    {
        id: 1,
        title: lang => STRINGS.USER_STORIES[lang]
    },
    {
        id: 2,
        title: lang => STRINGS.USER_STORIES[lang]
    },
    {
        id: 3,
        title: lang => STRINGS.USER_STORIES[lang]
    },
    {
        id: 4,
        title: lang => STRINGS.USER_STORIES[lang]
    },
    {
        id: 5,
        title: lang => STRINGS.USER_STORIES[lang]
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
    }
    // {
    //     id: 3,
    //     title: lang => STRINGS.CONTENT_CREATION[lang],
    //     items: CONTENT_CREATION_ITEMS
    // }
];

export { SERVICE_ITEMS };
