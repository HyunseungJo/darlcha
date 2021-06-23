import React from "react";
import "../styles/Barleytea.css";
function Barleytea({ title = "", semititle = "", description = <p></p> }) {
  return (
    <div>
      <div className="Barleytea_wrap1">
        <div className="Barleytea_wrap2">
          <div className="Barleytea1">{title}</div>
          <div className="Barleytea2">{semititle}</div>
          <div className="Barleytea3">{description}</div>
        </div>
      </div>
    </div>
  );
}
export default Barleytea;
