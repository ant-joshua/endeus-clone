// Import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import classNames from "classnames";

import Image from "next/image";

// Install Swiper Modules
SwiperCore.use([A11y, Autoplay]);

export default function ArticleSlider(props) {
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
      autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }} 
    >
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
      <SwiperSlide className="relative w-2/4  mx-1">
          <a className={"px-2"}>
            <div className="rounded-lg">
              <figure className="relative flex flex-col flex-shrink-0">
                <picture className="w-full flex justify-center items-center">
                  <img
                    src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                    className="object-cover rounded-lg"
                    alt="card-img"
                  />
                </picture>
                <figcaption className="hidden">Bakwan Sayur</figcaption>
              </figure>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h2 className="mt-1 text-base font-bold">
                  #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
                </h2>
                <div className="flex flex-row text-gray-500">
                  <span className="text-xs ml-1">15 Menit</span>
                </div>
              </div>
              <div className="pt-1" />
            </div>
          </a>
      </SwiperSlide>
    </Swiper>
  );
}
