import { Link, NavLink } from "react-router";
import { LocalText } from "../../LocalText/LocalText";
import { useState } from "react";
import ModelWindow from "../../Module/ModelWindow/ModelWindow";

function GeneralMenu({ menu1, menu11, menu6, menu5, menu8 }) {
  const [openModel, setOpenModel] = useState(false);
  const setOpenModelHandler = () => {
    setOpenModel(true);
    document.body.style.overflow = "hidden";
  };
  const setCloseModelHandler = () => {
    setOpenModel(false);
    document.body.style.overflow = "";
  };
  return (
    <>
      <div className="genn-fl-row genn-Header-2-block">
        <NavLink to="./kitchen" className="genn-Header-2-block-menu" onC>
          <img src={menu1} alt={LocalText.Header.MenuIco.mi1} />
          <div className="genn-Header-2-block-menu-text">
            <div> {LocalText.Header.MenuIco.mi1} </div>
          </div>
        </NavLink>

        <NavLink to="./shkaf" className="genn-Header-2-block-menu">
          <img src={menu11} alt={LocalText.Header.MenuIco.mi2} />
          <div className="genn-Header-2-block-menu-text">
            {LocalText.Header.MenuIco.mi2}
          </div>
        </NavLink>
        <NavLink to="./prikhozhie" className="genn-Header-2-block-menu">
          <img src={menu6} alt={LocalText.Header.MenuIco.mi3} />
          <div className="genn-Header-2-block-menu-text">
            {LocalText.Header.MenuIco.mi3}
          </div>
        </NavLink>
        <NavLink to="./garderobnye" className="genn-Header-2-block-menu">
          <img src={menu5} alt={LocalText.Header.MenuIco.mi4} />
          <div className="genn-Header-2-block-menu-text">
            {LocalText.Header.MenuIco.mi4}
          </div>
        </NavLink>
        <div className="genn-Header-2-block-menu" onClick={setOpenModelHandler}>
          <img src={menu8} alt={LocalText.Header.MenuIco.mi5} />
          <div className="genn-Header-2-block-menu-text">
            {LocalText.Header.MenuIco.mi5}
          </div>
        </div>
      </div>
      {openModel && <ModelWindow  setCloseModelHandler={setCloseModelHandler} menu8={menu8}/>}
    </>
  );
}
export default GeneralMenu;
