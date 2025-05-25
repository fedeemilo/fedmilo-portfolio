import emailjs from 'emailjs-com'
import { STRINGS } from './strings'
import { MdOutlineEmail } from 'react-icons/md'
import { FiInstagram } from 'react-icons/fi'

const EMAIL_PROMISE = form =>
    emailjs.sendForm('service_8rskees', 'template_jgp6fog', form.current, '_m5_aiiADdy809JFg')

const TOAST_PROMISE_OPTIONS = lang => ({
    loading: STRINGS.LOADING[lang],
    success: STRINGS.FORM_SUCCESS[lang],
    error: STRINGS.FORM_ERROR[lang]
})

const TOAST_OPTIONS = {
    style: {
        minWidth: '8rem',
        backgroundColor: '#1c1c2e',
        color: '#ffffff'
    },
    position: 'top-right',
    duration: 4000,
    success: {
        icon: '✅',
        style: {
            border: '1px solid #22d3ee',
            backgroundColor: '#0f0f1a',
            color: '#22d3ee'
        }
    },
    error: {
        icon: '❌',
        style: {
            border: '1px solid #ff4d4f',
            backgroundColor: '#1c1c2e',
            color: '#ff4d4f'
        }
    },
    loading: {
        icon: '🕜',
        style: {
            border: '1px solid rgba(34, 211, 238, 0.4)',
            backgroundColor: '#1c1c2e',
            color: '#ffffff'
        }
    }
}

const CONTACT_OPTIONS = [
    {
        id: 1,
        icon: <MdOutlineEmail className="contact__option-icon" />,
        option: 'Email',
        value: 'fedmilo91@gmail.com',
        text: lang => STRINGS.SEND_A_MESSAGE[lang],
        href: 'mailto:fedmilo91@gmail.com'
    },
    {
        id: 2,
        icon: <FiInstagram className="contact__option-icon" />,
        option: 'Instagram',
        value: '@fedmilo',
        text: lang => STRINGS.SEND_A_MESSAGE[lang],
        href: 'https://www.instagram.com/fedmilo'
    }
]

export { TOAST_OPTIONS, TOAST_PROMISE_OPTIONS, EMAIL_PROMISE, CONTACT_OPTIONS }
