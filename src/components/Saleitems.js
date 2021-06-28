import React from "react";
import "../styles/Saleitems.css";

function Saleitems({
  href = "",
  img = require("../assets/images/latte_home.png").default,
  title = "",
  description = "",
  ea = "",
  krw = "",
  sale = "",
  firstsale = "",
  showTasteNote = false,
  top="",
  mid="",
  end=""

}) {
  return (
    <div>
      <a className="saleitems" href={href}>
        <div className="saleitems_wrap">
          <img className="itemimg" src={img} alt={title}/>
          <div className="item_description_wrap">
            <span className="item_description1">{title}</span>
            <div className="item_description2">{description}</div>
            <div>{showTasteNote ?<div>
              <div className="tastenote">
                <div className="tea1"><p className="tea1note">Taste Note</p></div>
                <div className="tea2"><p className="tea">{top}</p></div>
                <div className="tea3"><p className="tea">{mid}</p></div>
                <div className="tea4"><p className="tea">{end}</p></div>
              </div>
            </div> :""}</div>
            <div className="descriptionmm">
              <span className="item_description3">{ea}</span>
              <div className="item_description45">
              <span className="item_description4">
                <span className="item_description4_1">{krw}</span>
                <span className="item_description4_2">원~</span>
              </span>
              <div className="item_description5">
                <div className="item_des51"><span className="item_description5_1">{sale}</span></div>
                <div className="item_des52"><span className="item_description5_2">{firstsale}</span></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
export default Saleitems;
