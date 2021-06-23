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
  showTasteNote = false
}) {
  return (
    <div>
      <a className="saleitems" href={href}>
        <div className="saleitems_wrap">
          <img className="itemimg" src={img} alt={title}/>
          <div className="item_description_wrap">
            <span className="item_description1">{title}</span>
            <div className="item_description2">{description}</div>
            function() {
              
            }
            <div className="descriptionmm">
              <span className="item_description3">{ea}</span>
              <span className="item_description4">
                <span className="item_description4_1">{krw}</span>
                <span className="item_description4_2">원~</span>
              </span>
              <span className="item_description5">
                <span className="item_description5_1">{sale}</span>
                <span className="item_description5_2">{firstsale}</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
export default Saleitems;
