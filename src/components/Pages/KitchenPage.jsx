import Baner from "../Baner/Baner";
import { LocalText } from "../LocalText/LocalText";
import "./KitchenComponents/BannerKitchen/BannerKitchen.css";
import "./KitchenComponents/IconBoxKitchen.css";
import SliderBaner from "../SliderBaner/SliderBaner";
// import TextComponentbottom from "../Module/Text/TextComponentKitchen";
import "./KitchenComponents/SliderBanner/SliderBanner.css";
import KitchenGategory from "./KitchenComponents/KitchenGategory/KitchenGategory";

import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";
import TwoButtonV2 from "../TwoButtonV2/TwoButtonV2";
import TemplateNewsV1 from "../Module/News/NewsTemplate/TemplateNewsV1";
import TextComponent from "../Module/Text/TextComponent";
import Footer from "../Footer/Footer";
import TextComponentbottom from "../Module/Text/TextComponentbottom";
function KitchenPage() {
  return (
    <>
      <div
        id="genn-kitchen-Banner"
        className="genn-Baner-container kitchenBanerBlock text-[#000]"
      >
        <TextComponent
          title={LocalText.Kitchen.bannen.title}
          description={LocalText.Kitchen.bannen.description}
          classNameTextTitle={"genn-Baner-text  kitchenBaner"}
          classNameTitle={"genn-kitchenBaner-title"}
          classNamedescription={"genn-kitchenBaner-des"}
        />
      </div>
      <div className="k relative">
        <Baner
          videoBg={"https://l.okdeal.ru/video/bg-video-banner-kitchen.mp4"}
          videoBg2={"https://l.okdeal.ru/video/bg-video-banner-kitchen-mob.mp4"}
        />
      </div>
      <div id="genn-kitchen-SliderBaner" className="genn-SliderBaner-container">
        <TextComponentbottom
        title={LocalText.Kitchen.sliderBanner.title}
        description={LocalText.Kitchen.sliderBanner.description}
        description2={LocalText.Kitchen.sliderBanner.description2}
        titleButton={LocalText.Kitchen.sliderBanner.titleButton}
        classNameComponent={"genn-TextComponentKitchen"}
        />
  
        <SliderBaner
          title={LocalText.Kitchen.bannen.title}
          description={LocalText.Kitchen.bannen.description}
          classNameTextTitle={"genn-Baner-text  kitchenBaner"}
          classNameTitle={"genn-kitchenBaner-title"}
          classNamedescription={"genn-kitchenBaner-des"}
        />
      </div>
      <div
        id="genn-Categoryes "
        className="genn-Categoryes genn-kitchen-category"
      >
        <KitchenGategory />
      </div>
      <div id="genn-KitchenCards " className="genn-KitchenCards ">
        <TemplateNewsV1 />
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
    </>
  );
}
export default KitchenPage;
