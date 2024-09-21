import React from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <SwiperReact
      direction={'horizontal'}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="customSwiper" // Custom class name for the Swiper
    >
      <SwiperSlide>Slide 1</SwiperSlide>
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

export default Slider;
