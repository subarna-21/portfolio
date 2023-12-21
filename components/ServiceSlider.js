import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RxArrowTopRight,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";

// data;
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "we redefine convenience. Our focus?",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Our process is an art form in itself. We listen intently.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Our approach is rooted in collaboration and precision.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "We dive deep into your brand, target audience, and market dynamics.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index} className="mb-16">
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
