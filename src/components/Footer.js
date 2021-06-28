import React from "react"
import "../styles/Footer.css"
import nstore from "../assets/images/icon_nstore.png"
import insta from "../assets/images/icon_insta.png"
import amazon from "../assets/images/icon_amazon.png"
function Footer(){
    return(
    <div>
        <div className="footerwrap1">
            <div className="footerwrap2 d-flex">
                <div className="footer_left">
                    <p className="m-0 coperate">주식회사 달차컴퍼니</p>
                    <hr className="greyline my-2 "color="#868686"/>
                    <div className="mb-2 d-flex">
                        <span className="m-0">사업자 등록번호 : 317-81-47784</span>
                        <div className="divisionline "></div>
                        <span>대표자 : 정유찬</span>
                    </div>
                    <div className="mb-2" ><span className="m-0 ">주소: 서울특별시 강남구 역삼로 180, 4층(역삼동, MARU 180) </span></div>
                    <div className="mb-2" ><span className="m-0 ">통신판매업 신고번호 : 제 2019-서울강남-03967호</span></div>
                    <div className="mb-2 d-flex">
                        <span className="m-0">전화번호 : 1670-0506</span>
                        <div className="divisionline "></div>
                        <span>이메일 : hi@darlcha.com</span>
                    </div>
                </div>
            <div className="footer_right">
                <div>
                    <span className="footer_darl m-0">DARL</span>
                    <span className="footer_cha m-0">CHA</span>
                </div>
                <hr className="greyline my-2" color="#868686"/>
                <div className="mb-2"><span className="m-0">브랜드 스토리</span></div>
                <div className="mb-2"><span className="m-0">제휴문의</span></div>
                <div className="footer_icon d-flex">
                    <img src={nstore}></img>
                    <img className="footer_icon2" src={insta}></img>
                    <img src={amazon}></img>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;