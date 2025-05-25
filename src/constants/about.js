import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { STRINGS } from './strings'

const ABOUT_CARDS = [
    {
        key: 'experience',
        icon: <FaAward className="about__icon" />,
        title: lang => STRINGS.EXPERIENCE[lang],
        detail: lang => STRINGS.YEARS_WORKING[lang]
    },
    {
        key: 'clients',
        icon: <FiUsers className="about__icon" />,
        title: lang => STRINGS.CLIENTS[lang],
        detail: lang => STRINGS.WORLDWIDE[lang]
    },
    {
        key: 'projects',
        icon: <VscFolderLibrary className="about__icon" />,
        title: lang => STRINGS.PROJECTS[lang],
        detail: lang => STRINGS.COMPLETED[lang]
    }
]

const ABOUT_ME_TEXT = {
    en: `I'm a self-taught programmer and passionate Web Developer with 
         a strong curiosity for building things that people around the world can use,
         explore, and enjoy. Since an early age, I’ve been driven by the idea of turning
         ideas into real digital experiences. I enjoy diving into complex challenges,
         investigating modern technologies, and continuously improving my skills through
         online courses and hands-on projects. I believe in clean, thoughtful code and
         in creating solutions that are both functional and meaningful.`,

    es: `Soy un programador autodidacta y desarrollador web apasionado, con una fuerte 
         curiosidad por crear experiencias digitales que las personas en todo el mundo
         puedan usar, explorar y disfrutar.Desde muy joven me ha motivado la idea de
         convertir ideas en soluciones reales. Disfruto enfrentar desafíos complejos,
         investigar nuevas tecnologías y perfeccionar mis habilidades a través de cursos
         online y proyectos propios. Creo en el código limpio, en el aprendizaje constante
         y en desarrollar productos que sean funcionales y significativos.
        `
}

export { ABOUT_CARDS, ABOUT_ME_TEXT }
