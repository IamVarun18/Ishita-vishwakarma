import React from 'react'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'

const Slider = () => {
  const images = [
    'https://ik.imagekit.io/zftwymhqf/main%20images/be9d0eee-e073-45e4-a280-b142b098bb4c.JPG?updatedAt=1736441525552',
    'https://ik.imagekit.io/zftwymhqf/main%20images/cle/8c5c885d-181c-4660-9a69-36662db0fd01.JPG?updatedAt=1736442108147',
    'https://ik.imagekit.io/zftwymhqf/main%20images/cle/f9443b24-ebf1-48dc-9f04-2495489a9a81.JPG?updatedAt=1736442107685',
    'https://ik.imagekit.io/zftwymhqf/main%20images/IMG_0576.JPG?updatedAt=1736441535051',
    'https://ik.imagekit.io/zftwymhqf/main%20images/cle/b40c39b7-132d-4c5b-a917-534d43bf1f6f.JPG?updatedAt=1736442107941'
  ]

  return (
    <SwiperReact
      direction={'horizontal'}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true
      }}
      modules={[Mousewheel, Pagination]}
      className='customSwiper' // Custom class name for the Swiper
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%' // Adjust based on your design needs
          }}
        >
          {/* Content inside slide if needed */}
        </SwiperSlide>
      ))}
    </SwiperReact>
  )
}

export default Slider
