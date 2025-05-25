import { STRINGS } from './strings'
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiBootstrap,
    SiTailwindcss,
    SiReact,
    SiStyledcomponents,
    SiNodedotjs,
    SiMongodb,
    SiMysql,
    SiPython,
    SiGraphql,
    SiNestjs,
    SiNextdotjs,
    SiPostgresql
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const EXP_CONTENT_FRONTEND = [
    {
        id: 1,
        title: 'HTML',
        detail: lang => STRINGS.EXPERIENCED[lang],
        icon: <SiHtml5 />
    },
    {
        id: 2,
        title: 'CSS',
        detail: lang => STRINGS.INTERMEDIATE[lang],
        icon: <SiCss3 />
    },
    {
        id: 3,
        title: 'JavaScript',
        detail: lang => STRINGS.EXPERIENCED[lang],
        icon: <SiJavascript />
    },
    {
        id: 4,
        title: 'Next JS',
        detail: lang => STRINGS.EXPERIENCED[lang],
        icon: <SiNextdotjs />
    },
    {
        id: 5,
        title: 'Tailwind',
        detail: lang => STRINGS.INTERMEDIATE[lang],
        icon: <SiTailwindcss />
    },
    {
        id: 6,
        title: 'React',
        detail: lang => STRINGS.EXPERIENCED[lang],
        icon: <SiReact />
    },
    {
        id: 7,
        title: 'Styled Components',
        detail: lang => STRINGS.EXPERIENCED[lang],
        icon: <SiStyledcomponents />
    },
    {
        id: 8,
        title: 'Bootstrap',
        detail: lang => STRINGS.EXPERIENCED[lang],
        icon: <SiBootstrap />
    }
]

const EXP_CONTENT_BACKEND = [
    {
        id: 1,
        title: 'Node JS',
        detail: lang => STRINGS.EXPERIENCED[lang],
        icon: <SiNodedotjs />
    },
    {
        id: 2,
        title: 'MongoDB',
        detail: lang => STRINGS.INTERMEDIATE[lang],
        icon: <SiMongodb />
    },
    {
        id: 3,
        title: 'Nest JS',
        detail: lang => STRINGS.INTERMEDIATE[lang],
        icon: <SiNestjs />
    },
    {
        id: 4,
        title: 'MySQL',
        detail: lang => STRINGS.INTERMEDIATE[lang],
        icon: <SiMysql />
    },
    {
        id: 5,
        title: 'Python',
        detail: lang => STRINGS.BASIC[lang],
        icon: <SiPython />
    },
    {
        id: 6,
        title: 'AWS',
        detail: lang => STRINGS.INTERMEDIATE[lang],
        icon: <FaAws />
    },
    {
        id: 7,
        title: 'GraphQL',
        detail: lang => STRINGS.EXPERIENCED[lang],
        icon: <SiGraphql />
    },
    {
        id: 8,
        title: 'PostgreSQL',
        detail: lang => STRINGS.BASIC[lang],
        icon: <SiPostgresql />
    }
]
const EXP_CONTAINER = [
    {
        id: 1,
        title: lang => STRINGS.FRONTEND_DEV[lang],
        content: EXP_CONTENT_FRONTEND,
        type: 'frontend'
    },
    {
        id: 2,
        title: lang => STRINGS.BACKEND_DEV[lang],
        content: EXP_CONTENT_BACKEND,
        type: 'backend'
    }
]

export { EXP_CONTENT_FRONTEND, EXP_CONTENT_BACKEND, EXP_CONTAINER }
