import React from "react";
import { STRINGS } from "../../constants/strings";

const Form = ({ refForm, sendEmail, lang }) => {
    return (
        <form ref={refForm} onSubmit={sendEmail}>
            <input
                type="text"
                name="name"
                placeholder={STRINGS.YOUR_FULL_NAME[lang]}
                required
            />
            <input
                type="email"
                name="email"
                placeholder={STRINGS.YOUR_EMAIL[lang]}
                required
            />
            <textarea
                name="message"
                rows="7"
                placeholder={STRINGS.YOUR_MESSAGE[lang]}
                required
            ></textarea>
            <button type="submit" className="btn btn-primary">
                {STRINGS.SEND_A_MESSAGE[lang]}
            </button>
        </form>
    );
};

export default Form;
