import './footer.css'
import { useContext } from 'react'
import { STRINGS } from '../../constants/strings'
import { CONTEXT } from '../../core/context'
import { FOOTER_LINKS, FOOTER_SOCIALS } from '../../constants/footer'

const Footer = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT)

    return (
        <footer id="footer">
            <a href="#header" className="footer__logo">
                {STRINGS.FEDMILO.alias}
            </a>

            <ul className="permalinks">
                {FOOTER_LINKS.map(({ id, title }) => (
                    <li key={id}>
                        <a href={id}>{title(lang)}</a>
                    </li>
                ))}
            </ul>

            <div className="footer__socials">
                {FOOTER_SOCIALS.map(({ id, url, icon }) => (
                    <a key={id} href={url} target="_blank" rel="noreferrer">
                        {icon}
                    </a>
                ))}
            </div>

            <div className="footer__copyright">
                <small>&copy; {STRINGS.FEDMILO_COPYRIGHT[lang]}</small>
            </div>
        </footer>
    )
}

export default Footer
