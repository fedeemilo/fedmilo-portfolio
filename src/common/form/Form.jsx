import React from "react";
import "./form.css";
import { FORM_ELEMENTS } from "../../constants/form";
import { STRINGS } from "../../constants/strings";
import FormItem from "./FormItem";

const Form = ({ refForm, sendEmail, lang }) => {
    return (
        <form ref={refForm} onSubmit={sendEmail}>
            {FORM_ELEMENTS(lang).map(elem => (
                <FormItem {...elem} />
            ))}
            <button type="submit" className="btn btn-primary">
                {STRINGS.SEND_A_MESSAGE[lang]}
            </button>
        </form>
    );
};

export default Form;
