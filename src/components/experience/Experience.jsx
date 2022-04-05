import "./experience.css";
import { useContext } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { EXP_CONTAINER } from "../../constants/experience";
import { STRINGS } from "../../constants/strings";
import { CONTEXT } from "../../core/context";

const Experience = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT);

    return (
        <section id="experience">
            <h5>{STRINGS.SKILLS_I_HAVE[lang]}</h5>
            <h2>{STRINGS.MY_EXP[lang]}</h2>

            <div className="container experience__container">
                {EXP_CONTAINER.map(({ id, title, content, type }) => (
                    <div key={id} className={`experience__${type}`}>
                        <h3>{title(lang)}</h3>
                        <div className="experience__content">
                            {content.map(({ id, title, detail }) => (
                                <article
                                    key={id}
                                    className="experience__details"
                                >
                                    <BsPatchCheckFill className="experience__details-icon" />
                                    <div>
                                        <h4>{title}</h4>
                                        <small className="text-light">
                                            {detail(lang)}
                                        </small>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
