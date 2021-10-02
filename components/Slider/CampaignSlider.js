import { useRef } from "react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md/index";
import classNames from "classnames";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Scrollbar, A11y]);

export default function CampaignSlider(props) {
  const { className } = props;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Swiper
      className={classNames("campaign-slider", className)}
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides={true}
      roundLengths={true}
      loop={true}
      loopAdditionalSlides={10}
      edgeSwipeDetection={true}
      navigation={{
        prevEl: prevRef.current ? prevRef.current : undefined,
        nextEl: nextRef.current ? nextRef.current : undefined,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      grabCursor={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
        },
        "@0.75": {
          slidesPerView: 2,
        },
        "@1.00": {
          slidesPerView: 2,
        },
        "@1.50": {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide className="campaign-slider flex justify-center pb-10">
        <img
          className="object-cover min-h-full min-w-full object-center"
          src="https://img.kurio.network/cru4jKuEWGgWozgvpMj9aB4ZX54=/668x274/filters:quality(80)/https://kurio-img.kurioapps.com/21/06/08/ad6b02a0-852c-4319-a2c3-a2fb19e98e3a.png"
          alt="campaign-img"
        />
      </SwiperSlide>
      <SwiperSlide className="campaign-slider flex justify-center pb-10">
        <img
          className="object-cover min-h-full min-w-full object-center"
          src="https://img.kurio.network/S6DVGUJ7ASVMOAHWXZgjjI_liLI=/668x274/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/02/dd381e6e-41ac-418d-8b57-8b4a0f6f49e1.jpe"
          alt="campaign-img"
        />
      </SwiperSlide>
      <SwiperSlide className="campaign-slider flex justify-center pb-10">
        <img
          className="object-cover min-h-full min-w-full object-center"
          src="https://img.kurio.network/pRIbt9zYXVRli_cCggkuxkf48hg=/668x274/filters:quality(80)/https://kurio-img.kurioapps.com/21/07/12/a8e9cb48-83d8-4240-902a-0da2937fdbb2.png"
          alt="campaign-img"
        />
      </SwiperSlide>

      <div ref={prevRef} className="swiper-button-prev">
        <div className="rounded-full bg-yellow-400">
          <MdKeyboardArrowLeft size="32" color="black" />
        </div>
      </div>
      <div ref={nextRef} className="swiper-button-next">
        <div className="rounded-full bg-yellow-400">
          <MdKeyboardArrowRight size="32" color="black" />
        </div>
      </div>
    </Swiper>
  );
}
