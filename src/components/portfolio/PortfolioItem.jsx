import { useEffect, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import './portfolio.css'

const PortfolioItem = ({ image, imageWebp, title, subtitle, demo, hasGif, gif }) => {
    const [ref, isVisible] = useOnScreen()
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        if (isVisible) setShouldRender(true)
    }, [isVisible])

    const handleClick = () => {
        if (demo) window.open(demo, '_blank')
    }

    return (
        <div className={`portfolio-item fade-in-section ${isVisible ? 'visible' : ''}`} ref={ref}>
            {shouldRender && hasGif ? (
                <div className="portfolio-image-combo-wrapper" onClick={handleClick}>
                    <img src={image} alt={title} loading="lazy" />
                    <img src={gif} alt={`${title} demo`} loading="lazy" />
                </div>
            ) : (
                <div className="portfolio-image-wrapper" onClick={handleClick}>
                    <picture>
                        {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
                        <img src={image} alt={title} className="portfolio-image" loading="lazy" />
                    </picture>
                </div>
            )}
            <div className="portfolio-text-content">
                <h3 className="portfolio-title">{title}</h3>
                <p className="portfolio-subtitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default PortfolioItem
