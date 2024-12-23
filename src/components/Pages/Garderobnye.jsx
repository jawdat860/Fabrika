import Baner from "../Baner/Baner";
import video1 from "../../assets/images/bg-video/GarderobnyePc.mp4";
import video2 from "../../assets/images/bg-video/GarderobnyeMob.mp4";
import TextComponentbottom from "../Module/Text/TextComponentbottom";
import { LocalText } from "../LocalText/LocalText";
import SliderBaner from "../SliderBaner/SliderBaner";
import ShkafGategory from "./ShkafComponents/ShkafGategory";
import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";
import Footer from "../Footer/Footer";
import video3 from "../../assets/images/bg-video/GarderobnyeN3.mp4"
function Garderobnye() {
  return (
    <>
      <div
        id="genn-kitchen-Banner"
        className="genn-Baner-container kitchenBanerBlock"
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
      <div id="genn-IconsBox" className="genn-IconsBox genn-kitchen-IconsBox">
        <IconsBox />
      </div>
      <div
        id="genn-CommentsModal"
        className="genn-CommentsModal genn-kitchen-CommentsModal"
      >
        <CommentsModal />
      </div>
     
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
export default Garderobnye;
