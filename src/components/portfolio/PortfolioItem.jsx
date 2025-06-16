import './portfolio.css'

const PortfolioItem = ({ image, imageWebp, title, subtitle, demo }) => {
    const handleClick = () => {
        if (demo) {
            window.open(demo, '_blank')
        }
    }

    return (
        <div className="portfolio-item">
            <div
                className="portfolio-image-wrapper"
                onClick={handleClick}
                style={{ cursor: demo ? 'pointer' : 'default' }}
            >
                <picture>
                    {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
                    <img src={image} alt={title} className="portfolio-image" loading="lazy" />
                </picture>
            </div>
            <div className="portfolio-text-content">
                <h3 className="portfolio-title">{title}</h3>
                <p className="portfolio-subtitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default PortfolioItem
