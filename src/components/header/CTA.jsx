import CV from "../../assets/cv.pdf";
import { STRINGS } from "../../constants/strings";

const CTA = ({ lang }) => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">
                {STRINGS.DOWNLOAD_CV[lang]}
            </a>
            <a href="#contact" className="btn btn-primary">
                {STRINGS.LETS_TALK[lang]}
            </a>
        </div>
    );
};

export default CTA;
