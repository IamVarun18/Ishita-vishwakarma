import React from 'react';
// Import Swiper React components
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// Import required modules
import { EffectCreative } from 'swiper/modules';

const Swiper = () => {
    return (
        <SwiperReact
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
        >
            <SwiperSlide className=''><img src="https://images.unsplash.com/photo-1726597764489-5ba1c00a178a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </SwiperReact>
    );
};

export default Swiper;
