import { useState, useEffect, useRef } from 'react'

const useOnScreen = (threshold = 0.1) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const currentRef = ref.current
        if (!currentRef) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold }
        )

        observer.observe(currentRef)

        return () => {
            if (currentRef) observer.unobserve(currentRef)
        }
    }, [threshold])

    return [ref, isVisible]
}

export default useOnScreen
