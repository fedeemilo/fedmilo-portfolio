import { useEffect, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import OptimizedImage from '../../common/optimized-image/OptimizedImage'

const LazyFadeImage = ({ src, srcWebp, alt, className }) => {
    const [ref, isVisible] = useOnScreen()
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        if (isVisible) setShouldRender(true)
    }, [isVisible])

    return (
        <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
            {shouldRender && (
                <OptimizedImage src={src} srcWebp={srcWebp} alt={alt} className={className} />
            )}
        </div>
    )
}

export default LazyFadeImage
