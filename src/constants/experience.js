import { STRINGS } from "./strings";

const EXP_CONTENT_FRONTEND = [
    {
        id: 1,
        title: "HTML",
        detail: lang => STRINGS.EXPERIENCED[lang]
    },
    {
        id: 2,
        title: "CSS",
        detail: lang => STRINGS.INTERMEDIATE[lang]
    },
    {
        id: 3,
        title: "JavaScript",
        detail: lang => STRINGS.EXPERIENCED[lang]
    },
    {
        id: 4,
        title: "Bootstrap",
        detail: lang => STRINGS.EXPERIENCED[lang]
    },
    {
        id: 5,
        title: "Tailwind",
        detail: lang => STRINGS.INTERMEDIATE[lang]
    },
    {
        id: 6,
        title: "React",
        detail: lang => STRINGS.EXPERIENCED[lang]
    }
];

const EXP_CONTENT_BACKEND = [
    {
        id: 1,
        title: "Node JS",
        detail: lang => STRINGS.EXPERIENCED[lang]
    },
    {
        id: 2,
        title: "MongoDB",
        detail: lang => STRINGS.INTERMEDIATE[lang]
    },
    {
        id: 3,
        title: "PHP",
        detail: lang => STRINGS.BASIC[lang]
    },
    {
        id: 4,
        title: "MySQL",
        detail: lang => STRINGS.INTERMEDIATE[lang]
    },
    {
        id: 5,
        title: "Python",
        detail: lang => STRINGS.BASIC[lang]
    }
];

const EXP_CONTAINER = [
    {
        id: 1,
        title: lang => STRINGS.FRONTEND_DEV[lang],
        content: EXP_CONTENT_FRONTEND,
        type: "frontend"
    },
    {
        id: 2,
        title: lang => STRINGS.BACKEND_DEV[lang],
        content: EXP_CONTENT_BACKEND,
        type: "backend"
    }
];

export { EXP_CONTENT_FRONTEND, EXP_CONTENT_BACKEND, EXP_CONTAINER };
