import { useContext } from 'react'
import { CONTEXT } from '../../core/context'
import { PORTFOLIO_ITEMS } from '../../constants/portfolio'
import { STRINGS } from '../../constants/strings'
import './portfolio.css'
import Tooltip from '../../common/tooltip/Tooltip'
import OptimizedImage from '../../common/optimized-image/OptimizedImage'

const Portfolio = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT)

    return (
        <section id="portfolio">
            <h5>{STRINGS.MY_RECENT_WORK[lang]}</h5>
            <h2>{STRINGS.PORTFOLIO[lang]}</h2>

            <div className="portfolio__container">
                {PORTFOLIO_ITEMS(lang).map(
                    ({
                        id,
                        image,
                        imageWebp,
                        title,
                        subtitle,
                        github,
                        demo,
                        stack,
                        requestAccess
                    }) => (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <OptimizedImage
                                    src={image}
                                    srcWebp={imageWebp}
                                    alt={title}
                                    className="portfolio__image"
                                />
                            </div>
                            <h3>{title}</h3>
                            <h4>{subtitle}</h4>
                            <div className="portfolio__stack">
                                {stack?.map(({ icon, name }) => (
                                    <Tooltip key={name} content={name} delay={100}>
                                        {icon}
                                    </Tooltip>
                                ))}
                            </div>

                            <div className="portfolio__item-cta">
                                {github && (
                                    <a
                                        href={github}
                                        className="btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {STRINGS.GITHUB}
                                    </a>
                                )}
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {STRINGS.LIVE_DEMO[lang]}
                                </a>
                                {requestAccess && (
                                    <a
                                        href="#contact"
                                        className="btn"
                                        style={{
                                            backgroundColor: 'transparent',
                                            border: '1px solid var(--color-primary-variant)'
                                        }}
                                    >
                                        {STRINGS.REQUEST_ACCESS[lang]}
                                    </a>
                                )}
                            </div>
                        </article>
                    )
                )}
            </div>
        </section>
    )
}

export default Portfolio
