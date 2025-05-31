import './header.css'
import { useContext, useEffect, useState } from 'react'
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

    const [theme, setTheme] = useState(
        document.documentElement.getAttribute('data-theme') || 'dark'
    )

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const newTheme = document.documentElement.getAttribute('data-theme')
            setTheme(newTheme)
        })

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        })

        return () => observer.disconnect()
    }, [])

    const avatarSrc = theme === 'light' ? ICONS.ME_LIGHT : ICONS.ME_DARK
    const avatarWebp = theme === 'light' ? ICONS.ME_LIGHT_WEBP : ICONS.ME_DARK_WEBP

    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__intro">
                    <div className="header__avatar">
                        <OptimizedImage
                            src={avatarSrc}
                            srcWebp={avatarWebp}
                            alt="me"
                            className="avatar__image"
                        />
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
