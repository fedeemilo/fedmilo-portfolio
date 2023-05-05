import { ICONS } from './icons'
import { STRINGS } from './strings'
import { FaReact } from 'react-icons/fa'
import {
    SiMaterialui,
    SiGooglemaps,
    SiRedux,
    SiNextdotjs,
    SiChakraui,
    SiOpenai
} from 'react-icons/si'
import { AiOutlineAntDesign } from 'react-icons/ai'

const PORTFOLIO_ITEMS = lang => [
    {
        id: 1,
        image: ICONS.PORTFOLIO_IMG1,
        title: STRINGS.APP_TRAVEL_ADVISOR_TITLE,
        subtitle: STRINGS.APP_TRAVEL_ADVISOR_SUBTITLE[lang],
        github: 'https://github.com/fedeemilo/travel-advisor',
        demo: 'https://travel-advisor-steel.vercel.app/',
        stack: [
            { name: 'React JS', icon: <FaReact /> },
            { name: 'Material UI', icon: <SiMaterialui /> },
            { name: 'Google Maps', icon: <SiGooglemaps /> }
        ]
    },
    {
        id: 2,
        image: ICONS.PORTFOLIO_IMG2,
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
        image: ICONS.PORTFOLIO_IMG3,
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
        image: ICONS.PORTFOLIO_IMG4,
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
        image: ICONS.PORTFOLIO_IMG5,
        title: 'Charts templates & infographics',
        subtitle: STRINGS.APP_TRAVEL_ADVISOR_SUBTITLE[lang],
        github: 'https://github.com',
        demo: 'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma',
        stack: [
            { name: 'React JS', icon: <FaReact /> },
            { name: 'React JS', icon: <FaReact /> },
            { name: 'React JS', icon: <FaReact /> }
        ]
    },
    {
        id: 6,
        image: ICONS.PORTFOLIO_IMG6,
        title: 'Charts templates & infographics',
        subtitle: STRINGS.APP_TRAVEL_ADVISOR_SUBTITLE[lang],
        github: 'https://github.com',
        demo: 'https://dribble.com/shots/16674715-Crypto-currency-dashboards-and-financial-data-visualization',
        stack: [
            { name: 'React JS', icon: <FaReact /> },
            { name: 'React JS', icon: <FaReact /> },
            { name: 'React JS', icon: <FaReact /> }
        ]
    }
]

export { PORTFOLIO_ITEMS }
