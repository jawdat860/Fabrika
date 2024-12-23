import { LocalText } from "../../LocalText/LocalText";
import "./TopLevel.css";
import image from "../../../assets/images/bg-image/shkafTopLevel.jpg";
function TopLevel() {
  return (
    <>
      <div className="genn-TopLevel-title-sm">
        <div>{LocalText.shkaf.TopLevel.title}</div>
      </div>
      <div className="genn-TopLevel-imag-container">
        <img
          className="genn-TopLevel-imag"
          src={image}
          alt={LocalText.shkaf.TopLevel.title}
        />
      </div>
      <div className="genn-TopLevel-Text">
        <div className="genn-TopLevel-Text-title">
          {LocalText.shkaf.TopLevel.title}
        </div>
        <div className="genn-TopLevel-Text-desContainer">
          <div className="genn-TopLevel-Text-des1">
            {LocalText.shkaf.TopLevel.des1}
          </div>
          <div className="genn-TopLevel-Text-des2">
            {LocalText.shkaf.TopLevel.des2}
          </div>
        </div>
        <div className="genn-TopLevel-Text-buttonContainer">
          <button className="genn-TopLevel-Text-button1">
            {LocalText.shkaf.TopLevel.buttonTiTle1}
          </button>
          <button className="genn-TopLevel-Text-button2">
            {LocalText.shkaf.TopLevel.buttonTiTle2}
          </button>
          <button className="genn-TopLevel-Text-button3">
            {LocalText.shkaf.TopLevel.buttonTiTle3}
          </button>
        </div>
      </div>
    </>
  );
}
export default TopLevel;
