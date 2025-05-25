import { STRINGS } from './strings'
import { FiInstagram } from 'react-icons/fi'
import { RiLinkedinFill } from 'react-icons/ri'

const FOOTER_LINKS = [
    {
        id: '#',
        title: lang => STRINGS.HOME[lang]
    },
    {
        id: '#about',
        title: lang => STRINGS.ABOUT[lang]
    },
    {
        id: '#experience',
        title: lang => STRINGS.EXPERIENCE[lang]
    },
    {
        id: '#portfolio',
        title: lang => STRINGS.PORTFOLIO[lang]
    },
    {
        id: '#contact',
        title: lang => STRINGS.CONTACT[lang]
    }
]

const FOOTER_SOCIALS = [
    {
        id: 'linkedin',
        url: 'https://www.linkedin.com/in/fede-milone/',
        icon: <RiLinkedinFill />
    },
    {
        id: 'instagram',
        url: 'https://www.instagram.com/fedmilo/',
        icon: <FiInstagram />
    }
]

export { FOOTER_LINKS, FOOTER_SOCIALS }
