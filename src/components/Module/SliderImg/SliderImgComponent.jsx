import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import image1 from "../../../assets/images/bg-image/SliderImg1.jpg";
import image2 from "../../../assets/images/bg-image/Sliderimg2.jpg";
import image3 from "../../../assets/images/bg-image/SliderImg3.jpg";
import image4 from "../../../assets/images/bg-image/SligerImg.jpg";
import { Navigation, Pagination } from "swiper/modules";
import "./SliderImgComponent.css";

function SliderImgComponent({ sliderId, title }) {
  const images = [image1, image2, image3, image4];
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible((prev) => !prev);
  };

  return (
    <div
      className={`genn-SlidImg-box ${
        overlayVisible ? "roundNone" : "roundTrue"
      } `}
    >
      <Swiper
        loop={true}
        breakpoints={{
         
          768: { slidesPerView: 1 },
          360: { slidesPerView: 1.1, spaceBetween: 10, loop: true },
          375: { slidesPerView: 1.1, spaceBetween: 10, loop: true },
          414: { slidesPerView: 1.1, spaceBetween: 10, loop: true },
        }}
        autoplay={false}
        pagination={{
          clickable: true,
        }}
        navigation={
          overlayVisible
            ? false
            : {
                prevEl: ".prev", // Custom previous button
                nextEl: `.next-${sliderId}`, // Custom next button
              }
        }
        modules={[Navigation, Pagination]}
        noSwiping={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="genn-SliderImg-container">
              <div className="shkafoverLay">
                <div className="genn-SliderImgComponent-title">{title}</div>
              </div>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`custom-overlay genn-dn-mob ${
          overlayVisible ? "show" : "hide"
        }`}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          laudantium ex impedit dolore harum odio eos dignissimos pariatur nemo
          quos, explicabo ullam quasi blanditiis magni. Autem eum dignissimos
          accusantium dolorum?{" "}
        </p>
      </div>
      <div
        className={`custom-overlay-mob genn-dn-pc ${
          overlayVisible ? "show" : "hide"
        }`}
      >
        <div className="genn-SliderImg-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          laudantium ex impedit dolore harum odio eos dignissimos pariatur nemo
          quos, explicabo ullam quasi blanditiis magni. Autem eum dignissimos
          accusantium dolorum?
        </div>
      </div>
      {/* Navigation buttons */}
      <div className={`next next-${sliderId} `}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>

      <div
        className={`genn-SliderImg-plus !z-[100] ${
          overlayVisible ? "anima" : ""
        }`}
        onClick={toggleOverlay}
      >
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
}

export default SliderImgComponent;