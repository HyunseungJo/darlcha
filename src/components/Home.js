import React from "react";
import my from "../assets/images/icon_my.png";
import Barleytea from "./Barleytea";
import Header from "./Header";
import Mainhome from "./Mainhome";
import Saleitems from "./Saleitems";
import Principle from "./Principle";
function Home() {
  return (
    <div>
      <Header />
      <Mainhome />
      <Barleytea
        title={"검정보리 음료"}
        semititle={"BLACK BARLEY SERIES"}
        description={
          <p>
            커피를 좋아하지만 카페인은 싫은 당신을 위한 ‘페이크 커피’입니다.
            <br />
            카페인이 전혀 없고, 칼로리도 낮고, 라떼 제품은 락토프리 우유를
            사용하여
            <br /> 언제나 부담없이 즐기실 수 있답니다.
          </p>
        }
      />
      <Saleitems
        href={"latte"}
        img={require("../assets/images/latte_home.png").default}
        title={"달차 검정보리라떼"}
        description={
          "은은한 달콤함과 고소함이 특징인 검정보리 라떼입니다. 칼로리가 100ml당 22.5칼로리로 시중 라떼의 1/4 수준이에요. 2021년 새롭게 리뉴얼된 제품으로 더 풍부한 맛을 느껴보세요."
        }
        ea={"6 / 12 / 24 개입"}
        krw={"15,390"}
        sale={"최대 25% 할인"}
        firstsale={"첫구매 추가할인"}
      />
      <Saleitems
        href={"original"}
        img={require("../assets/images/original_home.png").default}
        title={"달차 검정보리오리지널"}
        description={
          "진한 보리차와 아메리카노 사이의 고소함과 쌉쌀함을 특징으로 하는 검정보리 오리지널입니다. 물 대신, 아메리카노 대신 카페인 걱정없이 데일리 음료로 가볍게 즐기기에 제격이에요."
        }
        ea={"6 / 12 / 24 개입"}
        krw={"13,110"}
        sale={"최대 25% 할인"}
        firstsale={"첫구매 추가할인"}
      />
      <Saleitems
        href={"original"}
        img={require("../assets/images/bundle_home.png").default}
        title={"검정보리라떼 & 오리지널 번들"}
        description={
          "검정보리 라떼와 오리지널을 한 번에 즐길 수 있는 번들 제품입니다. 각 제품 6병씩 총 12병으로 구성되어 있어요. 둘 중 어느 제품을 구매할지 고민되신다면, 번들을 선택해보세요."
        }
        ea={"12 개입 (6 + 6)"}
        krw={"25,500"}
        sale={"15% 할인"}
        firstsale={"첫구매 추가할인"}
      />
      <Principle />
      <Barleytea
        title={"무카페인 허브차"}
        semititle={"HERBAL INFUSED TEA"}
        description={
          <p>
            가벼워지고 싶을 때, 생기를 되찾고싶을 때, 사색에 잠기고싶을 때 등
            <br />
            일상의 다양한 상황에 맞게 준비된 달차의 허브차 제품들을 만나보세요.
            <br />
            서울대 디자인학부생들이 직접 제작한 아트워크를 통해,
            <br /> 입과 눈 모두 즐거운 시간을 선사합니다.
          </p>
        }
      />
    </div>
  );
}
export default Home;
