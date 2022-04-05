import { useContext } from "react";
import { CONTEXT } from "../../core/context";
import { PORTFOLIO_ITEMS } from "../../constants/portfolio";
import { STRINGS } from "../../constants/strings";
import "./portfolio.css";

const Portfolio = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT);

    return (
        <section id="portfolio">
            <h5>{STRINGS.MY_RECENT_WORK[lang]}</h5>
            <h2>{STRINGS.PORTFOLIO[lang]}</h2>

            <div className="container portfolio__container">
                {PORTFOLIO_ITEMS.map(({ id, image, title, github, demo }) => (
                    <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a
                                href={github}
                                className="btn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {STRINGS.GITHUB}
                            </a>
                            <a
                                href={demo}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {STRINGS.LIVE_DEMO[lang]}
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
