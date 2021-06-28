import React from "react";
import my from "../assets/images/icon_my.png";
import Barleytea from "./Barleytea";
import Header from "./Header";
import Mainhome from "./Mainhome";
import Saleitems from "./Saleitems";
import Principle from "./Principle";
import Footer from "./Footer";
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
      <Saleitems
        href={"original"}
        img={require("../assets/images/leaveme_home.png").default}
        title={"Leave me - 가벼워지다"}
        description={
          "쌓여가는 무거움과 이별하고 싶을 때, Leave me와 함께 가벼워지세요."
        }
        ea={"12ea / 1박스"}
        krw={"14,900"}
        sale={"9% 할인"}
        firstsale={"첫구매 추가할인"}
        showTasteNote= {true}
        top={"TOP: 상큼한 레몬밤과 레몬머틀"}
        mid={"MID: 뒤이어 다가오는 사과의 달콤함"}
        end={" END: 은근하게 밀려오는 둥근 향의 팥과 비트"}
        
      />
      <Saleitems
        href={"original"}
        img={require("../assets/images/brightenme_home.png").default}
        title={"Brighten me - 생기를 되찾다"}
        description={
          "지친 순간 기분전환이 필요할 때, Brighten me와 함께 생기를 되찾으세요."
        }
        ea={"12ea / 1박스"}
        krw={"14,900"}
        sale={"9% 할인"}
        firstsale={"첫구매 추가할인"}
        showTasteNote= {true}
        top={"TOP: 깊고 짙은 루이보스의 따뜻함"}
        mid={"MID: 달달한 블루베리와 마리골드의 밸런스"}
        end={"END: 새콤한 히비스커스의 깔끔한 마무리"}
      />
      <Saleitems
        href={"original"}
        img={require("../assets/images/lostinme_home.png").default}
        title={"Lost in me - 생각에 잠기다"}
        description={
          "하루 끝 나만의 시간이 필요할 때, Lost in me와 함께 사색에 잠겨보세요."
        }
        ea={"12ea / 1박스"}
        krw={"14,900"}
        sale={"9% 할인"}
        firstsale={"첫구매 추가할인"}
        showTasteNote= {true}
        top={"TOP: 혀 끝에서 시작하는 페퍼민트의 경쾌함"}
        mid={"MID: 섬세하게 얽혀있는 로즈마리의 깊은 향기"}
        end={"END: 차분함을 일깨워주는 라벤더"}
      />
       <Saleitems
        href={"original"}
        img={require("../assets/images/teabundle_home.png").default}
        title={"달차 티백 3종 패키지"}
        description={
          "달차의 세 가지 프리미엄 티백을 한 번에 만나보세요. 전용 선물상자에 담아 전달해드립니다. Leave me, Brighten me, Lost in me 각각 1박스씩 총 3박스로 구성된 패키지입니다."}
        ea={"12ea / 1박스 * 3, 총 3박스"}
        krw={"39,600"}
        sale={"20% 할인"}
        firstsale={"첫구매 추가할인"}
      />
      <Footer />
    </div>
  );
}
export default Home;
