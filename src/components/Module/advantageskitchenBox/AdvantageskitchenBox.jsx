import { Fragment } from "react";
import "./AdvantageskitchenBox.css";

function AdvantageskitchenBox({
  title,
  ArrayText,
  classNameComponent,
  bgImage,
   // Pass the image URL as a prop
}) {
  return (
    <div
      className={`genn-AdvantageskitchenBox genn-${classNameComponent}-AdvantageskitchenBox`}
    >
      <div className="genn-AdvantageskitchenBox-title">{title}</div>
      <div className="genn-AdvantageskitchenBox-container1">
        <div className="genn-AdvantageskitchenBox-container">
          <ul className="genn-AdvantageskitchenBox-ul">
            {ArrayText.map((text, index) => (
              <Fragment key={index}>
                <li className="genn-AdvantageskitchenBox-des">{text}</li>
                {index === 1 &&  (
                  <img
                    src={ bgImage}
                    alt="Decorative"
                    className="genn-AdvantageskitchenBox-listImage"
                  />
                )}
              </Fragment>
            ))}
          </ul>
        </div>
        <div
          className="genn-AdvantageskitchenBox-container1-image"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
       
      </div>
      <div className="genn-AdvantageskitchenBox-button-container">
            <button className="genn-Baner-button-v2">Заказать звонок</button>
        </div>
    </div>
  );
}

export default AdvantageskitchenBox;
