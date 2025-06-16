import { ICONS } from './icons'
import { STRINGS } from './strings'

const PORTFOLIO_ITEMS = lang => [
    {
        id: 1,
        image: ICONS.PORTFOLIO_MAMOVIES,
        imageWebp: ICONS.PORTFOLIO_MAMOVIES_WEBP,
        title: 'Mamovies',
        subtitle: STRINGS.APP_MAMOVIES_SUBTITLE[lang],
        demo: 'https://mamovies.io',
        requestAccess: true
    },
    {
        id: 2,
        image: ICONS.PORTFOLIO_EDUVOICE,
        imageWebp: ICONS.PORTFOLIO_EDUVOICE_WEBP,
        title: STRINGS.APP_EDUVOICE,
        subtitle: STRINGS.APP_EDUVOICE_SUBTITLE[lang],
        github: 'https://github.com/fedeemilo/eduvoice-ai',
        demo: 'https://www.eduvoice.ai/'
    },
    // {
    //     id: 3,
    //     image: ICONS.PORTFOLIO_CRYPTOLAND,
    //     imageWebp: ICONS.PORTFOLIO_CRYPTOLAND_WEBP,
    //     title: 'Cryptoland',
    //     subtitle: STRINGS.APP_CRYPTOLAND_SUBTITLE[lang],
    //     github: 'https://github.com/fedeemilo/cryptoland',
    //     demo: 'https://cryptolandd.vercel.app/'
    // },
    {
        id: 4,
        image: ICONS.PORTFOLIO_REALTOR,
        imageWebp: ICONS.PORTFOLIO_REALTOR_WEBP,
        title: STRINGS.APP_REALTOR,
        subtitle: STRINGS.APP_REALTOR_SUBTITLE[lang],
        github: 'https://github.com/fedeemilo/realtor',
        demo: 'https://realtor-rose.vercel.app'
    },
    // {
    //     id: 5,
    //     image: ICONS.PORTFOLIO_CODEAI,
    //     imageWebp: ICONS.PORTFOLIO_CODEAI_WEBP,
    //     title: 'Codeai',
    //     subtitle: STRINGS.APP_CODEAI_SUBTITLE[lang],
    //     github: 'https://github.com/fedeemilo/codeai-react',
    //     demo: 'https://codeai-bot.vercel.app'
    // },
    {
        id: 6,
        image: ICONS.PORTFOLIO_TSHIRTS,
        imageWebp: ICONS.PORTFOLIO_TSHIRTS_WEBP,
        title: 'Shirts',
        subtitle: STRINGS.APP_SHIRTS[lang],
        github: 'https://github.com/fedeemilo/shirts_threejs_ai',
        demo: 'https://shirts-threejs-ai.vercel.app/'
    }

    // {
    //     id: 7,
    //     image: ICONS.PORTFOLIO_CODEFIX,
    //     imageebp: ICONS.PORTFOLIO_CODEFIX_WEBP,
    //     title: STRINGS.APP_CODEFIX,
    //     subtitle: STRINGS.APP_CODEFIX_SUBTITLE[lang],
    //     github: 'https://github.com/fedeemilo/codefix',
    //     demo: 'https://codefix-eight.vercel.app'
    // }
]

export { PORTFOLIO_ITEMS }
