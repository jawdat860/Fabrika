import "./IconsBox.css";
import image1 from "../../assets/images/ico/1IconsBox.svg";
import image2 from "../../assets/images/ico/2IconsBox.svg";
import image3 from "../../assets/images/ico/3IconBox.svg";
import image8 from "../../assets/images/ico/8IconBox.svg";
import image4 from "../../assets/images/ico/4IconBox.svg";
import image5 from "../../assets/images/ico/5IconBox.svg";
import image6 from "../../assets/images/ico/6IconBox.svg";
import image7 from "../../assets/images/ico/7IconBox.svg";
import { LocalText } from "../LocalText/LocalText";
function IconsBox() {
  return (
    <>
    <div className="genn-IconsBox-containerCard genn-fl-row ">
      <div className="genn-IconsBox-Card card1">
        <img src={image1} alt={LocalText.IconsBox.button} />
        <h4>{LocalText.IconsBox.title1}</h4>
        <button className="genn-IconsBox-Card">
          {LocalText.IconsBox.button}
        </button>
      </div>
      <div className="genn-IconsBox-Card  card2">
        <img src={image2} alt={LocalText.IconsBox.title2} />
        <h4>{LocalText.IconsBox.title2}</h4>

        <button className="genn-IconsBox-Card card2">
          {LocalText.IconsBox.button}
        </button>
      </div>
      <div className="genn-IconsBox-Card  card3">
        <img src={image3} alt={LocalText.IconsBox.title3} />
        <h4>{LocalText.IconsBox.title3}</h4>
        <button className="genn-IconsBox-Card">
          {LocalText.IconsBox.button}
        </button>
      </div>
      <div className="genn-IconsBox-Card  card4">
        <img src={image4} alt={LocalText.IconsBox.title4} />
        <h4>{LocalText.IconsBox.title4}</h4>
        <button className="genn-IconsBox-Card">
          {LocalText.IconsBox.button}
        </button>
      </div>
      <div className="genn-IconsBox-Card  card5">
        <img src={image5} alt={LocalText.IconsBox.title5} />
        <h4>{LocalText.IconsBox.title5}</h4>
        {/* <button className="genn-IconsBox-Card"></button> */}
      </div>
      <div className="genn-IconsBox-Card card6">
        <img src={image6} alt={LocalText.IconsBox.title6} />
        <h4>{LocalText.IconsBox.title6}</h4>
        {/* <button className="genn-IconsBox-Card">8-2</button> */}
      </div>
      <div className="genn-IconsBox-Card card7">
        <img src={image7} alt={LocalText.IconsBox.title7} />
        <h4>{LocalText.IconsBox.title7}</h4>
        {/* <button className="genn-IconsBox-Card">8-2</button> */}
      </div>
      <div className="genn-IconsBox-Card card8">
        <img src={image8} alt={LocalText.IconsBox.title8} />
        <h4>{LocalText.IconsBox.title8}</h4>
        {/* <button className="genn-IconsBox-Card">8-2</button> */}
      </div>
    </div>
  
    </>
  );
}
export default IconsBox;
