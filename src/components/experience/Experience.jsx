import './experience.css'
import { useContext } from 'react'
import { EXP_CONTAINER } from '../../constants/experience'
import { STRINGS } from '../../constants/strings'
import { CONTEXT } from '../../core/context'

const Experience = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT)

    return (
        <section id="experience">
            <h5>{STRINGS.SKILLS_I_HAVE[lang]}</h5>
            <h2>{STRINGS.MY_EXP[lang]}</h2>

            <div className="container experience__container">
                {EXP_CONTAINER.map(({ id, title, content, type }) => (
                    <div key={id} className={`experience__${type}`}>
                        <h3>{title(lang)}</h3>
                        <div className="experience__content">
                            {content.map(({ id, title, detail, icon }) => (
                                <article className="experience__card">
                                    <div className="experience__icon">{icon}</div>
                                    <h4>{title}</h4>
                                    <small>{detail(lang)}</small>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience
