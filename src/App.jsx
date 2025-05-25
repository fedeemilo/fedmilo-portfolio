import { useEffect, useReducer } from 'react'
import { language } from './core/reducer/language'
import { store } from './core/store'
import Provider from './core/context'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { ADD_INITIAL_VALUE, CHANGE_LANGUAGE } from './core/types'
import { Toaster } from 'react-hot-toast'

const App = () => {
    const [state, dispatch] = useReducer(language, store)

    const toggleLanguage = lang =>
        dispatch({
            type: CHANGE_LANGUAGE,
            payload: lang
        })

    useEffect(() => {
        dispatch({
            type: ADD_INITIAL_VALUE,
            payload: {
                toggleLanguage
            }
        })
    }, [state.action])

    return (
        <>
            <Toaster />
            <Provider value={{ dispatch, state }}>
                <Header />
                <Nav />
                <About />
                <Experience />
                <Portfolio />
                <Contact />
                <Footer />
            </Provider>
        </>
    )
}

export default App
