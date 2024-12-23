import React, { useRef, useState } from "react";
import imagePhoto from "../../../../assets/images/bg-image/Rectangle.jpg";
import { LocalText } from "../../../LocalText/LocalText";
import "./NewsTemplate.css";
import image1 from "../../../../assets/images/bg-image/kitxhenCard1.png";
import image2 from "../../../../assets/images/bg-image/kitxhenCard2.png";
import image3 from "../../../../assets/images/bg-image/kitxhenCard3.png";
import image4 from "../../../../assets/images/bg-image/kitxhenCard4.png";
import image5 from "../../../../assets/images/bg-image/kitxhenCard5.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import TemplateCardV1 from "../Card/templateCardV1";

const cardArray = [
  {
    id: "card1",
    image: image1,
    title: LocalText.Kitchen.KitchenCards.cardTitle1,
    des: LocalText.Kitchen.KitchenCards.card1,
  },
  {
    id: "card2",
    image: image2,
    title: LocalText.Kitchen.KitchenCards.cardTitle2,
    des: LocalText.Kitchen.KitchenCards.card2,
  },
  {
    id: "card3",
    image: image3,
    title: LocalText.Kitchen.KitchenCards.cardTitle3,
    des: LocalText.Kitchen.KitchenCards.card3,
  },
  {
    id: "card4",
    image: image4,
    title: LocalText.Kitchen.KitchenCards.cardTitle4,
    des: LocalText.Kitchen.KitchenCards.card4,
  },
  {
    id: "card5",
    image: image5,
    title: LocalText.Kitchen.KitchenCards.cardTitle5,
    des: LocalText.Kitchen.KitchenCards.card5,
  },
];

function TemplateNewsV1() {
  const swiperRef = useRef(null); // Reference to Swiper instance
  const [isPlaying, setIsPlaying] = useState(true); // State to track autoplay status

  const swiperBreakpoints = {
    1920: { slidesPerView: 5, spaceBetween: 60 },
    1440: { slidesPerView: 5 },
    1200: { slidesPerView: 5 ,spaceBetween: 24 },
    700: {
      slidesPerView: 3,
      slidesOffsetAfter: 100,
      slidesOffsetBefore: 100,
      centeredSlides: true,
      spaceBetween: 11,
      loop: true,
    },
    500: {
      slidesPerView: 2,
      slidesOffsetAfter: 100,
      slidesOffsetBefore: 100,
      centeredSlides: true,
      spaceBetween: 11,
      loop: true,
    },
    414: {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 18,
      loop: true,
    },
    375: {
      centeredSlides: true,
      slidesPerView: 1.3,
      spaceBetween: 10,
      loop: true,
    },
    360: {
      centeredSlides: true,
      slidesPerView: 1.7,
      spaceBetween: 10,
      loop: true,
    },
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      swiperRef.current?.autoplay.stop(); // Stop autoplay
    } else {
      swiperRef.current?.autoplay.start(); // Start autoplay
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="genn-templateCardV1-container">
      {/* Photo Section */}
      <div className="genn-templateCardV1-photo">
        <div className="genn-templateCardV1-photo-title">
          <span>{LocalText.Kitchen.KitchenCards.titlePhotoFirstWord}</span>{" "}
          {LocalText.Kitchen.KitchenCards.titlePhotoSecondWord}
        </div>
        <div className="genn-templateCardV1-photo-image">
          <img
            src={imagePhoto}
            alt={LocalText.Kitchen.KitchenCards.titleButton}
          />
        </div>
        <div className="genn-templateCardV1-photo-button">
          <button className="genn-Baner-button-v5">
            {LocalText.Kitchen.KitchenCards.titleButton}
          </button>
        </div>
      </div>

      {/* Card Slider Section */}
      <div className="genn-templateCardV1-CardsContainer ">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={swiperBreakpoints}
          navigation={{
            prevEl: ".prev", // Custom previous button
            nextEl: `.next`, // Custom next button
          }}
        >
          {cardArray.map((item) => (
            <SwiperSlide key={item.id}>
              <TemplateCardV1
                id={item.id}
                imageSrc={item.image}
                title={item.title}
                des={item.des}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Play/Pause Button */}
        <div className="genn-templateCardV1-controls">
          <div className="grnn-prev-next">
            <div className="prev">
              {" "}
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="next">
              {" "}
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <button onClick={handlePlayPause} className="genn-autoplay-toggle">
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      {/* Text Section */}
      <div className="genn-templateCardV1-text">
        <div className="genn-templateCardV1-text-first">
          {LocalText.Kitchen.KitchenCards.textUnder1}
        </div>
        <div className="genn-templateCardV1-text-second">
          {LocalText.Kitchen.KitchenCards.textUnder2}
        </div>
      </div>
    </div>
  );
}

export default TemplateNewsV1;
