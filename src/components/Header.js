import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header_mainwrap">
          <div className="header_main">
            <div></div>
            <a href="/" className="darlcha ">
              <div className="darl">DARL</div>
              <div className="cha">CHA</div>
            </a>
            <div className="header_icon">
              <a href="mypage" className="header_icon1"></a>
              <a href="cart" className="header_icon2"></a>
            </div>
          </div>
        </div>
        <ul className="Navigation container-navbar row">
          <li className="col-2 ">
            <a href="produt">
              <p className="mb-0">전체상품</p>
            </a>
          </li>
          <li className="col-2">
            <a href="subscription">
              <p className="mb-0">정기구매</p>
            </a>
          </li>
          <li className="col-2 story">
            <a href="story">
              <p className="mb-0">브랜드 스토리</p>
            </a>
            
          </li>
          <li className="col-2 naverstore">
            <a target="_blank" href="https://smartstore.naver.com/darlcha">
              <p className="mb-0">네이버스토어</p>
            </a>
            
          </li>
          <li className="col-2">
            <a
              target="_blank"
              href="https://www.instagram.com/darlcha.official/"
              className="mb-0"
            >
              인스타그램
            </a>
            
          </li>
          <li className="col-2">
            <p className="mb-0">Amazon</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
