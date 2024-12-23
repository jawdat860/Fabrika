import { LocalText } from "../LocalText/LocalText";
import image1 from "../../assets/images/bg-image/SliderBaner1.png";
import image2 from "../../assets/images/bg-image/SliderBaner2.png";
import image3 from "../../assets/images/bg-image/SliderBaner3.png";
import image4 from "../../assets/images/bg-image/SliderBaner4.png";
import image5 from "../../assets/images/bg-image/SliderBaner5.png";
import "./SliderBaner.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core styles
import "swiper/css/pagination"; // For pagination
import "swiper/css/navigation"; // For navigation arrows
import "swiper/swiper-bundle.css"; // For the latest versions

function SliderBaner() {
  const images = [
    { src: image1, alt: LocalText.SliderBaner.altImage1 },
    { src: image2, alt: LocalText.SliderBaner.altImage2 },
    { src: image3, alt: LocalText.SliderBaner.altImage3 },
    { src: image4, alt: LocalText.SliderBaner.altImage4 },
    { src: image5, alt: LocalText.SliderBaner.altImage5 },
  ];

  return (
    <>
     

      <div className="genn-SliderBaner-image-container">
        <Swiper
          spaceBetween={20} // Spacing between slides
          slidesPerView={5} // Show 5 slides by default
          navigation={{
            prevEl: ".custom-prev", // Custom previous button
            nextEl: ".custom-next", // Custom next button
          }} // Enable default navigation
          loop={true} // Enable looping
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
          pagination={{ clickable: true }} // Enable pagination
          modules={[Navigation]}
          breakpoints={{
            1920: { slidesPerView: 5 },
            1440: { slidesPerView: 4 },
            1200: { slidesPerView: 3.2 },
            768: { slidesPerView: 2.1 },
            415: {
              slidesPerView: 2.1, // Show 1.2 slides at 414px width
              // Center the active slide
              spaceBetween: 10,
            },
            414: {
              slidesPerView: 1.1, // Show 1.2 slides at 414px width
              centeredSlides: true, // Center the active slide
              spaceBetween: 10,
            },
            375: { slidesPerView: 1.1, centeredSlides: true, paceBetween: 10 },
            360: { slidesPerView: 1.1, centeredSlides: true, spaceBetween: 10 },
            260: { slidesPerView: 1.1, centeredSlides: true, spaceBetween: 10 },
          }}
          className="genn-SliderBaner-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="genn-SliderBaner-image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="genn-SliderBaner-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}

        <div className="custom-next">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </>
  );
}

export default SliderBaner;
