import './header.css'
import { useContext } from 'react'
import { CONTEXT } from '../../core/context'
import { STRINGS } from '../../constants/strings'
import OptimizedImage from '../../common/optimized-image/OptimizedImage'
import { ICONS } from '../../constants/icons'
import { ABOUT_CARDS, ABOUT_ME_TEXT } from '../../constants/about'
import { FaComments } from 'react-icons/fa'

const Header = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT)

    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__intro">
                    <div className="header__avatar">
                        <OptimizedImage src={ICONS.ME} srcWebp={ICONS.ME_WEBP} alt="me" />
                    </div>
                    <div className="header__info">
                        <h1>fedmilo</h1>
                        <h2 className="text-light">Web Developer & Digital Craftsman</h2>
                        <p className="header__realname">Federico Milone</p>
                    </div>
                </div>

                <div className="header__about">
                    <div className="about__cards">
                        {ABOUT_CARDS.map(({ key, icon, title, detail }) => (
                            <article key={key} className="about__card">
                                {icon}
                                <h5>{title(lang)}</h5>
                                <small>{detail(lang)}</small>
                            </article>
                        ))}
                    </div>

                    <p className="about__description">{ABOUT_ME_TEXT[lang]}</p>

                    <a href="#contact" className="btn btn-primary">
                        <FaComments style={{ marginRight: '0.5rem' }} />
                        {STRINGS.LETS_TALK[lang]}
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
