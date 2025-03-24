import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { journey } from "./journey";
import { Mousewheel } from "swiper/modules";
import { useState } from "react";

export default function OurJourney() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Swiper
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        slideToClickedSlide={true}
        modules={[Mousewheel]}
        mousewheel={{ releaseOnEdges: true, sensitivity: 5.5 }}
        slidesPerView={4}
        spaceBetween={50}
        breakpoints={{
          400: {
            slidesPerView: 1.2,
          },
          600: {
            slidesPerView: 2.1,
          },
          900: {
            slidesPerView: 3.2,
          },
        }}
      >
        {journey.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <h5 className="mt-4 text-lg font-semibold text-primary">
                {item.name}
              </h5>
              <p className="text-zinc-600 text-base pt-6">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
        <ControlButtons activeSlide={activeSlide} />
      </Swiper>
    </div>
  );
}

function ControlButtons({ activeSlide }: { activeSlide: number }) {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between pt-10">
      <div className="flex gap-3">
        {journey.map((t, i) => (
          <button
            onClick={() => swiper.slideTo(i)}
            title={`${t.name}'s experience`}
            className={`w-4 h-1 ${
              i == activeSlide ? "bg-black" : "bg-gray-300"
            } rounded`}
            key={i}
          />
        ))}
      </div>
      <div className="flex gap-6 lg:gap-12 px-10">
        <button onClick={() => swiper.slidePrev()} title="Previous testimonial">
          <svg
            width="42"
            height="8"
            viewBox="0 0 71 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H71V3.5H1V4.5Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className=""
          title="Next testimonial"
        >
          <svg
            width="42"
            height="8"
            viewBox="0 0 71 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70.3536 4.35355C70.5488 4.15829 70.5488 3.84171 70.3536 3.64645L67.1716 0.464466C66.9763 0.269204 66.6597 0.269204 66.4645 0.464466C66.2692 0.659728 66.2692 0.976311 66.4645 1.17157L69.2929 4L66.4645 6.82843C66.2692 7.02369 66.2692 7.34027 66.4645 7.53553C66.6597 7.7308 66.9763 7.7308 67.1716 7.53553L70.3536 4.35355ZM0 4.5H70V3.5H0V4.5Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
