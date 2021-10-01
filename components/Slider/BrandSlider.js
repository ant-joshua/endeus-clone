import { useRef } from "react";
// Import Swiper core and required modules
import SwiperCore, { A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import classNames from "classnames";

import Image from "next/image";

// Install Swiper Modules
SwiperCore.use([A11y]);

export default function BrandSlider(props) {
  const { className } = props;
  return (
    <Swiper
      className={classNames("w-full", className)}
      spaceBetween={20}
      slidesPerView={1.8}
      roundLengths={true}
      loop={false}
      loopAdditionalSlides={10}
      edgeSwipeDetection={true}
      grabCursor={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        "@0.00": {
          slidesPerView: 2,
        },
        "@0.75": {
          slidesPerView: 2,
        },
        "@1.00": {
          slidesPerView: 4,
        },
        "@1.50": {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide className="relative w-2/4  mx-1">
        <div
          className="relative  h-full w-full overflow-hidden rounded-xl pb-150% "
          // style={{ paddingBottom: "150%" }}
        >
          <Image
            layout={"fill"}
            src="https://img.kurio.network/xBI5QmqTwpSLSmyY_9RfTMtgrXE=/400x600/filters:quality(80)/https://kurio-img.kurioapps.com/20/09/24/09fb8348-3bb4-49f4-8ed9-5a4cf98c348b.jpeg"
          />
          <div className="h-full w-full bg-gradient-to-b from-transparent via-transparent to-black absolute opacity-70"></div>
          <div className="h-1/2 p-5 w-full absolute bottom-0">
            <h1 className="text-white font-extrabold text-3xl">
              Andalan Mama By Filma
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4 mx-1">
        <div className="relative  h-full w-full overflow-hidden rounded-xl ">
          <Image
            layout={"fill"}
            src="https://img.kurio.network/xBI5QmqTwpSLSmyY_9RfTMtgrXE=/400x600/filters:quality(80)/https://kurio-img.kurioapps.com/20/09/24/09fb8348-3bb4-49f4-8ed9-5a4cf98c348b.jpeg"
          />
          <div className="h-full w-full bg-gradient-to-b from-transparent via-transparent to-black absolute opacity-70"></div>
          <div className="h-1/2 p-5 w-full absolute bottom-0">
            <h1 className="text-white font-extrabold text-3xl">
              Andalan Mama By Filma 2
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4 mx-1">
        <div className="relative  h-full w-full overflow-hidden rounded-xl ">
          <Image
            layout={"fill"}
            src="https://img.kurio.network/xBI5QmqTwpSLSmyY_9RfTMtgrXE=/400x600/filters:quality(80)/https://kurio-img.kurioapps.com/20/09/24/09fb8348-3bb4-49f4-8ed9-5a4cf98c348b.jpeg"
          />
          <div className="h-full w-full bg-gradient-to-b from-transparent via-transparent to-black absolute opacity-70"></div>
          <div className="h-1/2 p-5 w-full absolute bottom-0">
            <h1 className="text-white font-extrabold text-3xl">
              Andalan Mama By Filma 2
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4 mx-1">
        <div className="relative  h-full w-full overflow-hidden rounded-xl ">
          <Image
            layout={"fill"}
            src="https://img.kurio.network/xBI5QmqTwpSLSmyY_9RfTMtgrXE=/400x600/filters:quality(80)/https://kurio-img.kurioapps.com/20/09/24/09fb8348-3bb4-49f4-8ed9-5a4cf98c348b.jpeg"
          />
          <div className="h-full w-full bg-gradient-to-b from-transparent via-transparent to-black absolute opacity-70"></div>
          <div className="h-1/2 p-5 w-full absolute bottom-0">
            <h1 className="text-white font-extrabold text-3xl">
              Andalan Mama By Filma 2
            </h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
