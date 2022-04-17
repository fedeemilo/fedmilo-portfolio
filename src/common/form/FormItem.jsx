import React from "react";

const FormItem = props => {
    if (props.typeElem === "input") return <input {...props} />;

    if (props.typeElem === "textarea") return <textarea {...props} />;
};

export default FormItem;
