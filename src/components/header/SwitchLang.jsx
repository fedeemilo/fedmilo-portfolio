import React, { useContext   } from "react";
import { STRINGS } from "../../constants/strings";
import { CONTEXT } from "../../core/context";
import { CHANGE_LANGUAGE } from "../../core/types";

const SwitchLang = () => {
    const {
        dispatch,

        state: { lang }
    } = useContext(CONTEXT);

    const handleSwitch = e => {
        const { checked } = e.target;

        dispatch({
            type: CHANGE_LANGUAGE,
            payload: checked ? "es" : "en"
        });
    };

    return (
        <div className="switch__language">
            <span className={lang === "en" ? "en active__lang" : "en"}>
                {STRINGS.ENGLISH[lang]}
            </span>
            <input type="checkbox" className="check" onChange={handleSwitch} />
            <span className={lang === "es" ? "es active__lang" : "es"}>
                {STRINGS.SPANISH[lang]}
            </span>
        </div>
    );
};

export default SwitchLang;
