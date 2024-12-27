import { motion } from "framer-motion";
import Baner from "../Baner/Baner";
import Categoryes from "../Categoryes/Categoryes";
import TwoButtonV1 from "../TwoButtonV1/TwoButtonV1";
import VideoSlider from "../VideoSlider/VideoSlider";
import ImegBox from "../ImegBox/ImegBox";
import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";
import TwoButtonV2 from "../TwoButtonV2/TwoButtonV2";
import SliderBaner from "../SliderBaner/SliderBaner";
import { LocalText } from "../LocalText/LocalText";
import TextComponent from "../Module/Text/TextComponent";
import Footer from "../Footer/Footer";

function MainPage() {
  return (
    <>
      {/* Baner Component */}
      <motion.div
        id="genn-Baner"
        className="genn-Baner-container text-[#000]"
        initial={{ opacity: 0, scale: 0.9 }}  // Start with opacity hidden and scaled down
        whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
        exit={{ opacity: 0, scale: 0.9 }}  // Fade out and scale down when it leaves
        transition={{ duration: 0.6 }}  // Smooth transition for opacity and scale
      >
        <TextComponent
          title={LocalText.SliderBaner.title}
          description={LocalText.SliderBaner.description}
          classNameTextTitle={"genn-Baner-text genn-SliderBaner-text-container"}
          classNamedescription={"genn-SliderBaner-text-des"}
          classNameTitle={"genn-SliderBaner-text-title"}
        />
        <Baner
          videoBg={"https://l.okdeal.ru/video/bg-video-banner.mp4"}
          videoBg2={"https://l.okdeal.ru/video/bg-video-banner-mob.mp4"}
        />
      </motion.div>

      {/* SliderBaner Component */}
      <motion.div
        id="genn-SliderBaner"
        className="genn-SliderBaner-container"
        initial={{ opacity: 0, scale: 0.9 }}  // Normal size and hidden at the start
        whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
        exit={{ opacity: 0, scale: 0.9 }}  // Fade out and scale down when it leaves
        transition={{ duration: 0.6 }}
      >
        <TextComponent
          title={LocalText.SliderBaner.title}
          description={LocalText.SliderBaner.description}
          classNameTextTitle={"genn-SliderBaner-text-container"}
          classNamedescription={"genn-SliderBaner-text-des"}
          classNameTitle={"genn-SliderBaner-text-title"}
        />
        <SliderBaner />
      </motion.div>

      {/* Categoryes Component */}
      <motion.div
        id="genn-Categoryes"
        className="genn-Categoryes"
        initial={{ opacity: 0, scale: 0.9 }}  // Normal size and hidden initially
        whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
        exit={{ opacity: 0, scale: 0.9 }}  // Fade out and scale down when out of view
        transition={{ duration: 0.6 }}
      >
        <Categoryes />
      </motion.div>

      {/* TwoButtonV1 Component */}
      <motion.div
        id="genn-TwoButtonV1"
        initial={{ opacity: 0, scale: 0.9 }}  // Hidden initially
        whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
        exit={{ opacity: 0, scale: 0.9 }}  // Fade out and scale down when out of view
        transition={{ duration: 0.6 }}
      >
        <TwoButtonV1 />
      </motion.div>

      {/* VideoSlider Component */}
      <motion.div
        id="genn-VideoSlider"
        className="genn-VideoSlider"
        initial={{ opacity: 0, scale: 0.9 }}  // Hidden initially
        whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
        exit={{ opacity: 0, scale: 0.9 }}  // Fade out and scale down when out of view
        transition={{ duration: 0.6 }}
      >
        <VideoSlider />
      </motion.div>

      {/* ImegBox Component */}
      <motion.div
        id="genn-ImegBox"
        className="genn-ImegBox"
        initial={{ opacity: 0, scale: 0.9 }}  // Hidden initially
        whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
        exit={{ opacity: 0, scale: 0.9 }}  // Fade out and scale down when out of view
        transition={{ duration: 0.6 }}
      >
        <ImegBox />
      </motion.div>

      {/* IconsBox Component */}
      <motion.div
        id="genn-IconsBox"
        className="genn-IconsBox"
        initial={{ opacity: 0, scale: 0.9 }}  // Hidden initially
        whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
        exit={{ opacity: 0, scale: 0.9 }}  // Fade out and scale down when out of view
        transition={{ duration: 0.6 }}
      >
        <IconsBox />
      </motion.div>

      {/* CommentsModal Component */}
      <motion.div
        id="genn-CommentsModal"
        className="genn-CommentsModal"
        initial={{ opacity: 0, scale: 0.9 }}  // Hidden initially
        whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
        exit={{ opacity: 0, scale: 0.9 }}  // Fade out and scale down when out of view
        transition={{ duration: 0.6 }}
      >
        <CommentsModal />
      </motion.div>

      {/* TwoButtonV2 Component */}
      <motion.div
        id="genn-TwoButtonV2"
        className="genn-TwoButtonV2"
        initial={{ opacity: 0, scale: 0.9 }}  // Hidden initially
        whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
        exit={{ opacity: 0, scale: 0.9 }}  // Fade out and scale down when out of view
        transition={{ duration: 0.6 }}
      >
        <TwoButtonV2
          text1={LocalText.TwoButtonV2.button1}
          text2={LocalText.TwoButtonV2.button2}
        />
      </motion.div>

      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default MainPage;
