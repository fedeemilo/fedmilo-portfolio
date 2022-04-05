import { useState } from "react";
import "./nav.css";
import { NAV_ITEMS } from "../../constants/nav";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav>
            {NAV_ITEMS.map(({ id, children }) => (
                <a
                    key={id}
                    href={id}
                    className={activeNav === `${id}` ? "active" : ""}
                    onClick={() => setActiveNav(id)}
                >
                    {children}
                </a>
            ))}
        </nav>
    );
};

export default Nav;
