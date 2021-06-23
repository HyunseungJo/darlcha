import React from "react";
import "../styles/Principle.css";


function Principle() {
  return (
    <div>
      <div className="principlewrap1">
        <div className="principlewrap2">
          <div className="principle_title">달차의 세가지 원칙</div>
          <div className="principle_semititle">
            달차는 무카페인과 무설탕을 원칙으로 하고 있어요. 라떼 제품은 소화가
            잘되는 락토프리 우유만을 사용합니다.
          </div>
          <div className="principle_description">
            <div className="principle_img1">
              <div className="opacity">
                <p>無 설탕</p>
              </div>
            </div>
            <div className="principle_img2">
              <div className="opacity">
                <p>無 카페인</p>
              </div>
            </div>
            <div className="principle_img3">
              <div className="opacity">
                <p>
                  락토프리우유
                </p>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Principle;