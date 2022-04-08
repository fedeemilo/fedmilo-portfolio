import "./footer.css";
import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { STRINGS } from "../../constants/strings";
import { CONTEXT } from "../../core/context";
import { FOOTER_LINKS, FOOTER_SOCIALS } from "../../constants/footer";

const Footer = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT);

    return (
        <footer>
            <a href="#" className="footer__logo">
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
                    <a key={id} href={url}>
                        {icon}
                    </a>
                ))}
            </div>

            <div className="footer__copyright">
                <small>&copy; fedmilo portfolio. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
