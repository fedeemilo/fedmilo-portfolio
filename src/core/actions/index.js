const toggleLanguage = lang =>
    dispatch({
        type: CHANGE_LANGUAGE,
        payload: lang
    });

export { toggleLanguage };
