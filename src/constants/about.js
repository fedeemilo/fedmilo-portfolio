import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { STRINGS } from "./strings";

const ABOUT_CARDS = [
    {
        key: "experience",
        icon: <FaAward className="about__icon" />,
        title: lang => STRINGS.EXPERIENCE[lang],
        detail: "3+ Years Working"
    },
    {
        key: "clients",
        icon: <FiUsers className="about__icon" />,
        title: lang => STRINGS.CLIENTS[lang],
        detail: "200+ Worldwide"
    },
    {
        key: "projects",
        icon: <VscFolderLibrary className="about__icon" />,
        title: lang => STRINGS.PROJECTS[lang],
        detail: "80+ Completed"
    }
];

const ABOUT_ME_TEXT = {
    en: `I am a self-taught programmer, also a proficient Web Developer. 
        From a young age, I've loved the idea of being able to build
        something new that people around the world can
        experience and interact with. I really like to
        investigate, solve problems and challenges related to
        programming, learn about the latest technologies and
        take online courses to improve my skills.`,

    es: `Desde muy joven, siempre me ha encantado la idea de poder
        construir algo nuevo con lo que la gente alrededor del mundo
        pudiese interactuar. Me gusta mucho investigar, resolver diversos
        problemas relacionados con la programación y el desarrollo web, 
        estar al día con las últimas tecnologías y capacitarme con 
        cursos en línea para poder mejorar mis habilidades como desarrollador.
        `
};

export { ABOUT_CARDS, ABOUT_ME_TEXT };
