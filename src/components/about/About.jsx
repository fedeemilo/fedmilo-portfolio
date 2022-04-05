import "./about.css";
import { useContext } from "react";
import { ICONS } from "../../constants/icons";
import { ABOUT_CARDS, ABOUT_ME_TEXT } from "../../constants/about";
import { STRINGS } from "../../constants/strings";
import { CONTEXT } from "../../core/context";

const About = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT);

    return (
        <section id="about">
            <h5>{STRINGS.GET_TO_KNOW[lang]}</h5>
            <h2>{STRINGS.ABOUT_ME[lang]}</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ICONS.ME_ABOUT} alt="me-about" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        {ABOUT_CARDS.map(({ key, icon, title, detail }) => (
                            <article key={key} className="about__card">
                                {icon}
                                <h5>{title(lang)}</h5>
                                <small>{detail}</small>
                            </article>
                        ))}
                    </div>

                    <p>{ABOUT_ME_TEXT[lang]}</p>

                    <a href="#contact" className="btn btn-primary">
                        {STRINGS.LETS_TALK[lang]}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
