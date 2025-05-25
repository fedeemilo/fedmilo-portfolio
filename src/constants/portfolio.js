import { ICONS } from './icons'
import { STRINGS } from './strings'
import { FaReact } from 'react-icons/fa'
import {
    // SiMaterialui,
    SiGooglemaps,
    SiRedux,
    SiNextdotjs,
    SiChakraui,
    SiOpenai
} from 'react-icons/si'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { TbBrandThreejs } from 'react-icons/tb'

const PORTFOLIO_ITEMS = lang => [
    {
        id: 1,
        image: ICONS.PORTFOLIO_TRAVEL_ADVISOR,
        imageWebp: ICONS.PORTFOLIO_TRAVEL_ADVISOR_WEBP,
        title: STRINGS.APP_TRAVEL_ADVISOR_TITLE,
        subtitle: STRINGS.APP_TRAVEL_ADVISOR_SUBTITLE[lang],
        github: 'https://github.com/fedeemilo/travel-advisor',
        demo: 'https://travel-advisor-steel.vercel.app/',
        stack: [
            { name: 'React JS', icon: <FaReact /> },
            { name: 'Google Maps', icon: <SiGooglemaps /> }
        ]
    },
    {
        id: 2,
        image: ICONS.PORTFOLIO_CRYPTOLAND,
        imageWebp: ICONS.PORTFOLIO_CRYPTOLAND_WEBP,
        title: 'Cryptoland',
        subtitle: STRINGS.APP_CRYPTOLAND_SUBTITLE[lang],
        github: 'https://github.com/fedeemilo/cryptoland',
        demo: 'https://cryptolandd.vercel.app/',
        stack: [
            { name: 'React JS', icon: <FaReact /> },
            { name: 'Ant Design', icon: <AiOutlineAntDesign /> },
            { name: 'Redux', icon: <SiRedux /> }
        ]
    },
    {
        id: 3,
        image: ICONS.PORTFOLIO_REALTOR,
        imageWebp: ICONS.PORTFOLIO_REALTOR_WEBP,
        title: STRINGS.APP_REALTOR,
        subtitle: STRINGS.APP_REALTOR_SUBTITLE[lang],
        github: 'https://github.com/fedeemilo/realtor',
        demo: 'https://realtor-rose.vercel.app',
        stack: [
            { name: 'Next JS', icon: <SiNextdotjs /> },
            { name: 'Chakra UI', icon: <SiChakraui /> }
        ]
    },
    {
        id: 4,
        image: ICONS.PORTFOLIO_CODEAI,
        imageWebp: ICONS.PORTFOLIO_CODEAI_WEBP,
        title: 'Codeai',
        subtitle: STRINGS.APP_CODEAI_SUBTITLE[lang],
        github: 'https://github.com/fedeemilo/codeai-react',
        demo: 'https://codeai-bot.vercel.app',
        stack: [
            { name: 'React JS', icon: <FaReact /> },
            { name: 'Openai', icon: <SiOpenai /> }
        ]
    },
    {
        id: 5,
        image: ICONS.PORTFOLIO_TSHIRTS,
        imageWebp: ICONS.PORTFOLIO_TSHIRTS_WEBP,
        title: 'Shirts',
        subtitle: STRINGS.APP_SHIRTS[lang],
        github: 'https://github.com/fedeemilo/shirts_threejs_ai',
        demo: 'https://shirts-threejs-ai.vercel.app/',
        stack: [
            { name: 'React JS', icon: <FaReact /> },
            { name: 'Three JS', icon: <TbBrandThreejs /> },
            { name: 'Openai', icon: <SiOpenai /> }
        ]
    },
    {
        id: 6,
        image: ICONS.PORTFOLIO_MAMOVIES,
        imageWebp: ICONS.PORTFOLIO_MAMOVIES_WEBP,
        title: 'Mamovies',
        subtitle: STRINGS.APP_MAMOVIES_SUBTITLE[lang],
        demo: 'https://mamovies.io',
        stack: [
            { name: 'React JS', icon: <FaReact /> },
            { name: 'Chakra UI', icon: <SiChakraui /> }
        ]
    },
    {
        id: 7,
        image: ICONS.PORTFOLIO_CODEFIX,
        imageWebp: ICONS.PORTFOLIO_CODEFIX_WEBP,
        title: STRINGS.APP_CODEFIX,
        subtitle: STRINGS.APP_CODEFIX_SUBTITLE[lang],
        github: 'https://github.com/fedeemilo/codefix',
        demo: 'https://codefix-eight.vercel.app',
        stack: [
            { name: 'React JS', icon: <FaReact /> },
            { name: 'Openai', icon: <SiOpenai /> },
            { name: 'Chakra UI', icon: <SiChakraui /> }
        ]
    }
]

export { PORTFOLIO_ITEMS }
