import Baner from "../Baner/Baner";

import TextComponentbottom from "../Module/Text/TextComponentbottom";
import SliderBaner from "../SliderBaner/SliderBaner";
import { LocalText } from "../LocalText/LocalText";
import "./ShkafComponents/TextComponentShkaf.css";
import ShkafGategory from "./ShkafComponents/ShkafGategory";
import ShkafVideoButton from "./ShkafComponents/ShkafVideoButton";
import Perfectlayout from "./ShkafComponents/Perfectlayout";
import TopLevel from "./ShkafComponents/TopLevel";
import CustomCabinet from "./ShkafComponents/CustomCabinet";
import video1 from "../../assets/images/bg-video/Prikhozhie.mp4";
import video2 from "../../assets/images/bg-video/PrikhozhieMob.mp4";
import TextComponent from "../Module/Text/TextComponent";
import "./PrikhozhieComponents/TextComponentsBov.css";
import "./PrikhozhieComponents/PrikhozhieTextbottom.css";
import "./PrikhozhieComponents/PrikhozhieSliderBaner.css";
import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";
import TwoButtonV2 from "../TwoButtonV2/TwoButtonV2";
import Footer from "../Footer/Footer";
import "./PrikhozhieComponents/PrikhozhiePerfectlayou.css";
function Prikhozhie() {
  return (
    <div id="genn-Prikhozhie" className="Prikhozhie-component">
      <div
        id="genn-Prikhozhie-TextBov"
        className="genn-Baner-container  text-[#000]"
      >
        <TextComponent
          title={LocalText.Kitchen.bannen.title}
          description={LocalText.Kitchen.bannen.description}
          classNameTextTitle={"    PrikhozhieTextBov"}
          classNameTitle={"genn-kitchenBaner-title"}
          classNamedescription={"genn-kitchenBaner-des"}
        />
      </div>
      <div
        id="genn-Prikhozhie-Banner"
        className="genn-Baner-container shkafBanerBlock"
      >
        <Baner videoBg={video1} videoBg2={video2} />
      </div>
      <div className="genn-Text-container  PrikhozhieTextbottom">
        <TextComponentbottom
          title={LocalText.Prikhozhie.PrikhozhieTextBov.title}
          description={LocalText.Prikhozhie.PrikhozhieTextBov.des1}
          description2={LocalText.Prikhozhie.PrikhozhieTextBov.des2}
          titleButton={LocalText.Prikhozhie.PrikhozhieTextBov.titleButton}
          classNameComponent={"genn-PrikhozhieTextbottom-container"}
        />{" "}
      </div>
      <div className="genn-SliderBaner-container genn-Prikhozhie-SliderBaner ">
        <SliderBaner />
      </div>
      <div className="genn-SliderImg genn-shkaf-img Prikhozhie ">
        <ShkafGategory />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>

      {/* <div className="genn-shkafVideoButton ">
        <ShkafVideoButton />
      </div>
      <div className="genn-Perfectlayou ">
        <Perfectlayout
          title={LocalText.shkaf.Perfectlayout.title}
          video={"https://l.okdeal.ru/video/mobShkaf.mp4"}
          titleTextComponent={LocalText.shkaf.Perfectlayout.titleTextComponent}
          desTextComponent={LocalText.shkaf.Perfectlayout.desTextComponent}
        />
      </div>
      <div className="genn-TopLevel ">
        <TopLevel />
      </div>
      <div className="genn-CustomCabinet">
        <CustomCabinet />
      </div>
      <div className="genn-Perfectlayou genn-Perfectlayout-2 ">
        <Perfectlayout
          title={LocalText.shkaf.EmotionalConnection.title}
          video={"https://l.okdeal.ru/video/mobShkaf.mp4"}
          titleTextComponent={
            LocalText.shkaf.EmotionalConnection.titleTextComponent
          }
          desTextComponent={
            LocalText.shkaf.EmotionalConnection.desTextComponent
          }
        />
      </div> */}
      <div className="genn-Perfectlayou Prikhozhie ">
        <Perfectlayout
          title={LocalText.shkaf.Perfectlayout.title}
          video={"https://l.okdeal.ru/video/mobShkaf.mp4"}
          titleTextComponent={LocalText.shkaf.Perfectlayout.titleTextComponent}
          desTextComponent={LocalText.shkaf.Perfectlayout.desTextComponent}
        />
      </div>
      <div id="genn-TwoButtonV2" className="genn-TwoButtonV2 Prikhozhie">
        <TwoButtonV2 />
      </div>
      <div id="genn-IconsBox" className="genn-IconsBox genn-kitchen-IconsBox">
        <IconsBox />
      </div>
      <div
        id="genn-CommentsModal"
        className="genn-CommentsModal genn-kitchen-CommentsModal"
      >
        <CommentsModal />
      </div>
      <div
        id="genn-TwoButtonV2"
        className="genn-TwoButtonV2 genn-kitchen-TwoButtonV2"
      >
        <TwoButtonV2 />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
export default Prikhozhie;
