import { LocalText } from "../../LocalText/LocalText";

import Baner from "../../Baner/Baner";
import "./ShkafVideoButton.css"
function ShkafVideoButton() {
  return (
    <>
      <div className="genn-ShkafVideoButton-title">
        <span className="genn-ShkafVideoButton-title-span1">
          {LocalText.shkaf.shkafVideoButton.titleSpan1}
        </span>
        <span className="genn-ShkafVideoButton-title-span2">
          {" "}{LocalText.shkaf.shkafVideoButton.titleSpan2}
        </span>
      </div>
      <div className="genn-Baner-container">
      <Baner videoBg={"https://l.okdeal.ru/video/ShkafVideoButton.mp4"} videoBg2={"https://l.okdeal.ru/video/ShkafVideoButton.mp4"} />
      </div>
      <div className="genn-ShkafVideoButton-bottom">
        <div className="genn-ShkafVideoButton-bottom-title">
          {LocalText.shkaf.shkafVideoButton.titleTextComponent}
        </div>
        <div className="genn-ShkafVideoButton-bottom-des">
          {LocalText.shkaf.shkafVideoButton.desTextComponent}
        </div>
        <div className="genn-ShkafVideoButton-bottom-buttonContainer">
          <button className="genn-ShkafVideoButton-bottom-button">
            {LocalText.shkaf.shkafVideoButton.titleButtonTextComponent}
          </button>
        </div>
      </div>
    </>
  );
}
export default ShkafVideoButton;
