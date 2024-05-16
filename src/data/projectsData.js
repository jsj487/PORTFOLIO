import FoodEat1 from "../img/foodeat1.png";
import FoodEat2 from "../img/foodeat2.png";
import FoodEat3 from "../img/foodeat3.png";
import FoodEat4 from "../img/foodeat4.jpg";
import FoodEat5 from "../img/foodeat5.png";
import FoodEat6 from "../img/foodeat6.png";

import CasaVerde1 from "../img/casaverde1.png";
import CasaVerde2 from "../img/casaverde2.png";
import CasaVerde3 from "../img/casaverde3.png";
import CasaVerde4 from "../img/casaverde4.png";
import CasaVerde5 from "../img/casaverde5.png";
import CasaVerde6 from "../img/casaverde6.png";
import CasaVerde7 from "../img/casaverde7.png";

import JetFlix1 from "../img/jetflix1.png";
import JetFlix2 from "../img/jetflix2.png";
import JetFlix3 from "../img/jetflix3.png";

import Portfolio1 from "../img/portfolio1.png";
import Portfolio2 from "../img/portfolio2.png";
import Portfolio3 from "../img/portfolio3.png";
import Portfolio4 from "../img/portfolio4.png";

export const projectsData = [
  {
    title: "푸드잇(식당 예약 사이트)",
    members: "4인 프로젝트",
    date: "2022.12 ~ 2023.11 (4인 프로젝트)",
    image: [FoodEat1, FoodEat2, FoodEat3, FoodEat4, FoodEat5, FoodEat6],
    description: (
      <div>
        <b>
          캐치 테이블을 보고 생각 한 식당 예약 사이트입니다. 예약뿐 아니라 식당
          주인에 시점으로 예약한 대기열을 관리 할 수 있도록 구현했습니다.
        </b>
        기능으로는 회원가입, 로그인, 식당 예약, 문자 확인, 리뷰 등 식당 예약
        사이트로써 기능을 다 넣도록 노력했습니다
        <br /> <br />
        처음 하는 개발이니 만큼 Html, JS, CSS만을 사용했고, 코드가 매우 투박하며
        최적화도 안 되었지만 당시에는 기능을 구현했다는 과정이 즐거웠습니다.
        친구들과 같이 밤을 세어 가면서 버그를 고치고, 기능을 추가 해 나가면서
        더욱 성장하는 저희 모습을 보면서 뿌듯함을 느꼈습니다.
        <br /> <br />
        지금 코드를 다시 보면 도저히 봐줄 수 없는 수준에 코드지만 이 프로젝트를
        겪음으로써 제 부족함을 알고 더욱 정진하기 위해 노력했던 거 같습니다.
      </div>
    ),
    main_func: (
      <div>
        손님 - 음식점 예약 및 문자 메시지로 확인 가능
        <br />
        점주 - 예약 손님 확인 예약 관리
      </div>
    ),
    git: (
      <a href="https://github.com/7jjin/dot-com">
        https://github.com/7jjin/dot-com
      </a>
    ),
    url: (
      <a href="https://www.foodeat.store/mainpage">
        https://www.foodeat.store/mainpage
      </a>
    ),
    frontend: "HTML, JavaScript, CSS",
    backend: "Spring Boot, MySql, CentOS, VMware",
    modal_description: (
      <p>
        <strong>
          푸드잇은 사이트의 등록된 식당을 대기열을 이용해서 식당을 예약하는
          웹사이트입니다.
        </strong>
        &nbsp; 학교 졸업 작품을 위해 제작을 시작하였고, 이는 저의 첫 웹사이트
        개발이 되었습니다.
        <br />
        회원가입을 할 때 식당을 운영하는 점주와 식당을 찾는 손님을 구분해서
        회원가입을 하고 관리를 합니다. <strong>점주로 로그인</strong>을 하면
        점주 전용 페이지가 나오면서 현재 본인 가게에 손님에 대기열과 그 손님들에
        정보를 알 수 있습니다. <strong>손님으로 로그인</strong>하면 현재 위치를
        기반으로 등록된 주변 식당을 볼 수 있고, 식당 예약 시 회원가입 때 사용 한
        전화번호로 문자로 식당 입장을 안내 받을 수 있습니다.
      </p>
    ),
    modal_func: (
      <ul>
        <li>IP를 이용해 행정구역을 알아 내고 동일한 행정구역 식당 검색</li>
        <li>원하는 지역과 메뉴를 팔고 있는 식당 검색</li>
        <li>식당 예약 시 현재 남은 대기열과 식당 입장 안내 메시지 전송</li>
        <li>
          식당 점주는 본인 식당에 대기열을 확인하고 대기열을 삭제 또는 식당 입장
          버튼을 눌러 손님에게 안내 메시지를 전송 할 수 있다.
        </li>
      </ul>
    ),
  },
  {
    title: "CasaVerde(식물 판매 사이트)",
    date: "2023.10 ~ 2023.10 (6인 프로젝트)",
    image: [
      CasaVerde1,
      CasaVerde2,
      CasaVerde3,
      CasaVerde4,
      CasaVerde5,
      CasaVerde6,
      CasaVerde7,
    ],
    description: (
      <div>
        <b>
          식물을 키울 때 필요한 다양한 물건을 살 수 있는 홈쇼핑 사이트입니다.
        </b>
        부트캠프에서 홈쇼핑 사이트 제작을 과제로 주었고, 무슨 사이트를 하면
        좋을지에 대해 토론을 하다 몇몇 팀원이 이런 식물 관련 취미가 있어서
        결정했습니다.
        <br />
        <br />
        서버는 부트캠프에서 제공 해 줘서 FrontEnd와 BackEnd 개발에만 집중하여
        만든 2주짜리 단기 프로젝트였습니다.
        <br />
        <br />
        처음으로 친구들이 아닌 타인과 프로젝트를 진행 한 만큼 민폐를 끼칠까
        걱정했지만, 다양한 일이 일어났지만 저희가 완성하고픈 필수요소를 다 갖춘
        사이트가 만들 수 있어서 기뻤습니다.
      </div>
    ),
    main_func:
      "본인이 원하는 물품을 장바구니에 담아서 구매를 할 수 있고, 회원 정보 수정이 가능합니다.",
    git: (
      <a href="https://github.com/SW-6-Casa-Verde/Casa-Verde">
        https://github.com/SW-6-Casa-Verde/Casa-Verde
      </a>
    ),
    url: (
      <a href="http://kdt-sw-6-team08.elicecoding.com/">
        http://kdt-sw-6-team08.elicecoding.com/
      </a>
    ),
    frontend: "HTML, JavaScript, CSS",
    backend: "Mongo DB, VMware",
  },
  {
    title: "JETFLIX(영화 소개 사이트)",
    date: "2024.1 ~ 2024.1 (1인 프로젝트)",
    image: [JetFlix1, JetFlix2, JetFlix3],
    description: (
      <div>
        <b>영화 목록 API를 이용해서 만든 영화 소개 사이트입니다.</b>
        React를 배우고 처음 만든 사이트여서 기능도 없고 UI만 있는 사이트입니다.
        <br /> <br />
        React로 개발을 처음 하니 만큼 사이트 자체가 많이 투박합니다. Nomade 코딩
        인강으로 배운 것을 이용해서 만든 사이트입니다.
      </div>
    ),
    main_func: "영화 소개",
    git: (
      <a href="https://github.com/jsj487/react-beginner">
        https://github.com/jsj487/react-beginner
      </a>
    ),
    url: <a href="-">-</a>,
    frontend: "React, JavaScript, CSS",
    backend: "-",
  },
  {
    title: "JSJ Portfolio(포트폴리오)",
    date: "2024.2 ~ 2024.2 (1인 프로젝트)",
    image: [Portfolio1, Portfolio2, Portfolio3, Portfolio4],
    description: (
      <div>
        <b>
          제가 그 동안 해온 작업들 제가 할 수 있는 것을 보여주기 위한 포트폴리오
          사이트 입니다.
        </b>
        <br /> <br />
        전에 영화 소개 사이트를 제작하면서 사용한 React를 다시 한 번 숙련도 쌓기
        위해 위해 React를 이용하여 제작하였습니다. 제가 지금까지 어떤 개발을
        하였고, 무슨 기분을 느끼고, 무엇을 할 수 있는지 보여주기 위한 의도로
        제작하였습니다.
      </div>
    ),
    main_func: "포트폴리오",
    git: (
      <a href="https://github.com/jsj487/PORTFOLIO">
        https://github.com/jsj487/PORTFOLIO
      </a>
    ),
    url: <a>-</a>,
    frontend: "React, JavaScript, CSS",
    backend: "-",
  },
];
