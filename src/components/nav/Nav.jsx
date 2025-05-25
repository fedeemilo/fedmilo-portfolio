import { useState, useEffect } from 'react'
import './nav.css'
import { NAV_ITEMS } from '../../constants/nav'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    const [isFooterVisible, setIsFooterVisible] = useState(false)

    useEffect(() => {
        const sections = document.querySelectorAll('[id]')
        const footer = document.getElementById('footer')

        const sectionObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveNav(`#${entry.target.id}`)
                    }
                })
            },
            { root: null, threshold: 0.2 }
        )

        const footerObserver = new IntersectionObserver(
            ([entry]) => setIsFooterVisible(entry.isIntersecting),
            { threshold: 0.2 }
        )

        sections.forEach(section => sectionObserver.observe(section))
        if (footer) footerObserver.observe(footer)

        return () => {
            sections.forEach(section => sectionObserver.unobserve(section))
            if (footer) footerObserver.unobserve(footer)
        }
    }, [])

    return (
        <nav className={`nav__container ${isFooterVisible ? 'nav--hidden' : ''}`}>
            {NAV_ITEMS.map(({ id, children }) => (
                <a
                    key={id}
                    href={id}
                    className={activeNav === id ? 'active' : ''}
                    onClick={() => setActiveNav(id)}
                >
                    {children}
                </a>
            ))}
        </nav>
    )
}

export default Nav
