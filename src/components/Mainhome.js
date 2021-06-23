import React from "react";
import "../styles/Mainhome.css";

function Mainhome() {
  return (
    <div>
      <section className="mainwrap1">
        <div className="mainwrap2">
          <div className="main">
            <div className="main_1">남다른 차, 남다른 나</div>
            <div className="main_2">
              달차만의 특별한 블렌딩으로
              <br />
              당신의 일상에 특별함을 더합니다
            </div>

            <a className="main_3" href="goBuy">
              구매하러가기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Mainhome;
