import "./testimonials.css";
import { TESTIMONIALS_ITEMS } from "../../constants/testimonials";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CONTEXT } from "../../core/context";
import { useContext } from "react";
import { STRINGS } from "../../constants/strings";

const Testimonials = () => {
    const {
        state: { lang }
    } = useContext(CONTEXT);

    return (
        <section id="testimonials">
            <h5>{STRINGS.REVIEWS_FROM[lang]}</h5>
            <h2>{STRINGS.TESTIMONIALS[lang]}</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Pagination, Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {TESTIMONIALS_ITEMS.map(({ avatar, name, review }) => (
                    <SwiperSlide key={name} className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar} alt="Avatar One" />
                        </div>
                        <h5 className="client__name">{name}</h5>
                        <small className="client__review">{review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
