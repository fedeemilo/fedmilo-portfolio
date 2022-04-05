import { HEADER_SOCIALS } from "../../constants/header";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            {HEADER_SOCIALS.map(({ url, icon, id }) => (
                <a key={id} href={url} target="_blank" rel="noreferrer">
                    {icon}
                </a>
            ))}
        </div>
    );
};

export default HeaderSocials;
