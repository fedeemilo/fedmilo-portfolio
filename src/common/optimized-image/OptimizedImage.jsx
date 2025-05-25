const OptimizedImage = ({ src, srcWebp, alt, className = '', ...props }) => (
    <picture>
        <source srcSet={srcWebp} type="image/webp" />
        <img src={src} alt={alt} className={className} loading="lazy" {...props} />
    </picture>
)

export default OptimizedImage
