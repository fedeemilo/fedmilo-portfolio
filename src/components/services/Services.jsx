import "./services.css";
import { BiCheck } from "react-icons/bi";
import { STRINGS } from "../../constants/strings";
import { useContext } from "react";
import { CONTEXT } from "../../core/context";
import { SERVICE_ITEMS } from "../../constants/services";

const Services = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT);

    return (
        <section id="services">
            <h5>{STRINGS.WHAT_I_OFFER[lang]}</h5>
            <h2>{STRINGS.SERVICES[lang]}</h2>

            <div className="container services__container">
                {SERVICE_ITEMS.map(({ id, title, items }) => (
                    <article key={id} className="service">
                        <div className="service__head">
                            <h3>{title(lang)}</h3>
                        </div>

                        <ul className="service__list">
                            {items.map(({ id, title }) => (
                                <li key={id}>
                                    <BiCheck className="service__list-icon" />
                                    <p>{title(lang)}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;
