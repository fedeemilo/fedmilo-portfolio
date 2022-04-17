import { ICONS } from "./icons";
import { STRINGS } from "./strings";
import { FaReact } from "react-icons/fa";
import { SiMaterialui, SiGooglemaps } from "react-icons/si";

const PORTFOLIO_ITEMS = lang => [
    {
        id: 1,
        image: ICONS.PORTFOLIO_IMG1,
        title: STRINGS.APP_TRAVEL_ADVISOR[lang],
        github: "https://github.com/fedeemilo/travel-advisor",
        demo: "https://travel-advisor-steel.vercel.app/",
        stack: [
            { name: "React JS", icon: <FaReact /> },
            { name: "Material UI", icon: <SiMaterialui /> },
            { name: "Google Maps", icon: <SiGooglemaps /> }
        ]
    },
    {
        id: 2,
        image: ICONS.PORTFOLIO_IMG2,
        title: "Charts templates & infographics in Figma",
        github: "https://github.com",
        demo: "https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma"
    },
    {
        id: 3,
        image: ICONS.PORTFOLIO_IMG3,
        title: "Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
    },
    {
        id: 4,
        image: ICONS.PORTFOLIO_IMG4,
        title: "Maintaining tasks and tracking progress",
        github: "https://github.com",
        demo: "https://dribble.com/shots/16955822-Maintaining-tasks-and-tracking-progress"
    },
    {
        id: 5,
        image: ICONS.PORTFOLIO_IMG5,
        title: "Charts templates & infographics in Figma",
        github: "https://github.com",
        demo: "https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma"
    },
    {
        id: 6,
        image: ICONS.PORTFOLIO_IMG6,
        title: "Charts templates & infographics in Figma",
        github: "https://github.com",
        demo: "https://dribble.com/shots/16674715-Crypto-currency-dashboards-and-financial-data-visualization"
    }
];

export { PORTFOLIO_ITEMS };
