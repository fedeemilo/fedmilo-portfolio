import React, { useContext, useRef } from "react";
import "./contact.css";
import { CONTEXT } from "../../core/context";
import { STRINGS } from "../../constants/strings";
import toast from "react-hot-toast";
import {
    TOAST_OPTIONS,
    TOAST_PROMISE_OPTIONS,
    EMAIL_PROMISE,
    CONTACT_OPTIONS
} from "../../constants/contact";
import Form from "../../common/form/Form";

const Contact = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT);

    const form = useRef();
    const sendEmail = e => {
        e.preventDefault();

        toast.promise(
            EMAIL_PROMISE(form),
            TOAST_PROMISE_OPTIONS(lang),
            TOAST_OPTIONS
        );

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>{STRINGS.GET_IN_TOUCH[lang]}</h5>
            <h2>{STRINGS.CONTACT_ME[lang]}</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    {CONTACT_OPTIONS.map(
                        ({ id, icon, option, text, href, value }) => (
                            <article key={id} className="contact__option">
                                {icon}
                                <h4>{option}</h4>
                                <h5>{value}</h5>
                                <a href={href} target="_blank" rel="noreferrer">
                                    {text(lang)}
                                </a>
                            </article>
                        )
                    )}
                </div>

                <Form refForm={form} sendEmail={sendEmail} lang={lang} />
            </div>
        </section>
    );
};

export default Contact;
