import { Slider } from "@telegram-apps/telegram-ui";
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
      <div id="genn-Baner" className="genn-Baner-container">
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
      </div>
      <div id="genn-SliderBaner" className="genn-SliderBaner-container">
        <TextComponent
          title={LocalText.SliderBaner.title}
          description={LocalText.SliderBaner.description}
          classNameTextTitle={" genn-SliderBaner-text-container "}
          classNamedescription={"genn-SliderBaner-text-des"}
          classNameTitle={"genn-SliderBaner-text-title"}
        />
        <SliderBaner />
      </div>
      <div id="genn-Categoryes " className="genn-Categoryes">
        <Categoryes />
      </div>
      <div id="genn-TwoButtonV1">
        <TwoButtonV1 />
      </div>
      <div id="genn-VideoSlider" className="genn-VideoSlider">
        <VideoSlider />
      </div>
      <div id="genn-ImegBox" className="genn-ImegBox">
        <ImegBox />
      </div>
      <div id="genn-IconsBox" className="genn-IconsBox">
        <IconsBox />
      </div>
      <div id="genn-CommentsModal" className="genn-CommentsModal">
        <CommentsModal />
      </div>
      <div id="genn-TwoButtonV2" className="genn-TwoButtonV2">
        <TwoButtonV2
          text1={LocalText.TwoButtonV2.button1}
          text2={LocalText.TwoButtonV2.button2}
        />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
export default MainPage;
