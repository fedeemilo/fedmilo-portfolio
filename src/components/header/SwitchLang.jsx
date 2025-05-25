import { useContext } from 'react'
import { CONTEXT } from '../../core/context'
import { ICONS } from '../../constants/icons'

const SwitchLang = () => {
    const {
        state: { lang, toggleLanguage }
    } = useContext(CONTEXT)

    const handleSwitch = () => {
        toggleLanguage(lang === 'en' ? 'es' : 'en')
    }

    return (
        <div className="switch__language">
            <img
                src={ICONS.FLAG_EN}
                alt="English"
                className={`lang-flag ${lang === 'en' ? 'active' : ''}`}
            />
            <label className="switch">
                <input type="checkbox" onChange={handleSwitch} checked={lang === 'es'} />
                <span className="slider"></span>
            </label>
            <img
                src={ICONS.FLAG_ES}
                alt="Español"
                className={`lang-flag ${lang === 'es' ? 'active' : ''}`}
            />
        </div>
    )
}

export default SwitchLang
