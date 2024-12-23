import Baner from "../Baner/Baner";

// import TextComponentbottom from "../Module/Text/TextComponentKitchen";
import SliderBaner from "../SliderBaner/SliderBaner";
import { LocalText } from "../LocalText/LocalText";
import "./ShkafComponents/TextComponentShkaf.css";
import ShkafGategory from "./ShkafComponents/ShkafGategory";
import ShkafVideoButton from "./ShkafComponents/ShkafVideoButton";
import Perfectlayout from "./ShkafComponents/Perfectlayout";
import TopLevel from "./ShkafComponents/TopLevel";
import CustomCabinet from "./ShkafComponents/CustomCabinet";
import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";
import TwoButtonV2 from "../TwoButtonV2/TwoButtonV2";
import FooterW from "../Footer/FooterW";
import TemplateCardV1 from "../Module/News/Card/templateCardV1";
import TemplateNewsV1 from "../Module/News/NewsTemplate/TemplateNewsV1";
import TextComponentbottom from "../Module/Text/TextComponentbottom";

function Shkaf() {
  return (
    <div id="genn-shkaf" className="shkafComponent text-[#000]">
      <div
        id="genn-shkaf-Banner"
        className="genn-Baner-container shkafBanerBlock"
      >
        <Baner
          videoBg={"https://l.okdeal.ru/video/shkafPc.mp4"}
          videoBg2={"https://l.okdeal.ru/video/shkafMob.mp4"}
        />
      </div>
      <div className="genn-Text-container">
        <TextComponentbottom 
        title={LocalText.shkaf.sliderBanner.title}
        description={LocalText.shkaf.sliderBanner.des}
        description2={LocalText.shkaf.sliderBanner.des2}
        titleButton={LocalText.shkaf.sliderBanner.textButton}
        classNameComponent={"genn-shkaff"}
        />
        {/* <TextComponentbottom
          title={LocalText.shkaf.sliderBanner.title}
          description={LocalText.shkaf.sliderBanner.des}
          description2={LocalText.shkaf.sliderBanner.des2}
          titleButton={LocalText.shkaf.sliderBanner.textButton}
          classNameComponent={"genn-shkaff"}
        />{" "} */}
      </div>
      <div className="genn-SliderBaner-container">
        <SliderBaner
          title={LocalText.Kitchen.bannen.title}
          description={LocalText.Kitchen.bannen.description}
          classNameTextTitle={"genn-Baner-text  kitchenBaner"}
          classNameTitle={"genn-kitchenBaner-title"}
          classNamedescription={"genn-kitchenBaner-des"}
        />
      </div>
      <div className="genn-SliderImg genn-shkaf-img">
        <ShkafGategory />
      </div>
      <div className="genn-shkafVideoButton ">
        <ShkafVideoButton />
      </div>
      <div id="genn-KitchenCards " className="genn-KitchenCards genn-shkaf ">
        <TemplateNewsV1 />
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
      </div>
      <div id="genn-IconsBox" className="genn-IconsBox ">
        <IconsBox />
      </div>
      <div id="genn-CommentsModal" className="genn-CommentsModal ">
        <CommentsModal />
      </div>
      <div id="genn-TwoButtonV2" className="genn-TwoButtonV2 ">
        <TwoButtonV2 />
      </div>
      <footer className="footer">
        <FooterW />
      </footer>
    </div>
  );
}
export default Shkaf;
