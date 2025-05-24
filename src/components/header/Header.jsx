import { useContext } from 'react'
import { STRINGS } from '../../constants/strings'
import { ICONS } from '../../constants/icons'
import { CONTEXT } from '../../core/context'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
import SwitchLang from './SwitchLang'

const Header = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT)

    return (
        <header id="header">
            <SwitchLang />
            <div className="container header__container">
                <h5>{STRINGS.HELLO_IM[lang]}</h5>
                <h1>{STRINGS.MY_ALIAS}</h1>
                <h5 className="text-light">{STRINGS.MY_STACK[lang]}</h5>
                <CTA lang={lang} />
                <HeaderSocials />

                <div className="me">
                    <img src={ICONS.ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">
                    {STRINGS.SCROLL_DOWN[lang]}
                </a>
            </div>
        </header>
    )
}

export default Header
