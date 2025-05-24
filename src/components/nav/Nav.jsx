import { useState, useEffect } from 'react'
import './nav.css'
import { NAV_ITEMS } from '../../constants/nav'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    useEffect(() => {
        const sections = document.querySelectorAll('[id]')

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveNav(`#${entry.target.id}`)
                    }
                })
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.3
            }
        )

        sections.forEach(section => observer.observe(section))

        return () => {
            sections.forEach(section => observer.unobserve(section))
        }
    }, [])

    return (
        <nav>
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
