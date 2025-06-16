import { useContext } from 'react'
import { CONTEXT } from '../../core/context'
import { PORTFOLIO_ITEMS } from '../../constants/portfolio'
import { STRINGS } from '../../constants/strings'
import PortfolioItem from './PortfolioItem'
import './portfolio.css'

const Portfolio = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT)

    return (
        <section id="portfolio">
            <div className="portfolio-container">
                <h5 className="portfolio-section-title">{STRINGS.MY_RECENT_WORK[lang]}</h5>

                <div className="portfolio-list">
                    {PORTFOLIO_ITEMS(lang).map(item => (
                        <PortfolioItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
