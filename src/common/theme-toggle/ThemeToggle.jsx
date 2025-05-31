import './theme-toggle.css'
import { useEffect, useState } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <BsMoon /> : <BsSun />}
        </button>
    )
}

export default ThemeToggle
