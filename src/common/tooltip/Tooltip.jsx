import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ delay, children, direction, content }) => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {children}
            {active && (
                <div className={`tooltip-tip ${direction || "top"}`}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
