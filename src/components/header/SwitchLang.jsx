import React, { useContext } from "react";
import { STRINGS } from "../../constants/strings";
import { CONTEXT } from "../../core/context";

const SwitchLang = () => {
    const {
        state: { lang, toggleLanguage }
    } = useContext(CONTEXT);

    const handleSwitch = e => {
        const { checked } = e.target;
        const switchLang = checked ? "es" : "en";
        
        toggleLanguage(switchLang);
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
