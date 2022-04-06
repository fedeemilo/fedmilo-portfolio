import React, { useContext, useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { CONTEXT } from "../../core/context";
import { STRINGS } from "../../constants/strings";

const Contact = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT);

    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm(
            "service_8rskees",
            "template_jgp6fog",
            form.current,
            "_m5_aiiADdy809JFg"
        );

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>{STRINGS.GET_IN_TOUCH[lang]}</h5>
            <h2>{STRINGS.CONTACT_ME[lang]}</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>fedeemilo01@gmail.com</h5>
                        <a
                            href="mailto:fedeemilo91@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {STRINGS.SEND_A_MESSAGE[lang]}
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessageLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Federico Milone</h5>
                        <a
                            href="https://m.me/fmilone1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {STRINGS.SEND_A_MESSAGE[lang]}
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>2213080328</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=+5492213080328"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {STRINGS.SEND_A_MESSAGE[lang]}
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
