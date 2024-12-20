import ArkLator1 from "../img/ArkLator1.PNG";
import ArkLator2 from "../img/ArkLator2.PNG";
import ArkLator3 from "../img/ArkLator3.PNG";
import ArkLator4 from "../img/ArkLator4.PNG";

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

import Portfolio1 from "../img/portfolio1.png";
import Portfolio2 from "../img/portfolio2.png";
import Portfolio3 from "../img/portfolio3.png";
import Portfolio4 from "../img/portfolio4.png";

export const projectsData = [
  //ArkLator
  {
    title: "ArkLator(주간 골드 계산기)",
    members: "1인 프로젝트",
    date: "2024.12 ~ 제작 중",
    image: [ArkLator1, ArkLator2, ArkLator3, ArkLator4],
    description: (
      <div>
        스마일게이트에서 제작한 MMORPG 로스트아크는 국내에서 큰 인기를 끌고 있는
        게임입니다. 이 게임의 주요 콘텐츠 중 하나인 레이드에서는 보상으로
        골드라는 재화를 얻을 수 있습니다. 일반적으로 유저들은 한 캐릭터로 3개의
        레이드를 진행하며, 6개의 캐릭터를 통해 총 18번의 레이드를 수행합니다.
        <br /> <br />
        <b>
          {" "}
          이 과정에서 추가 수입과 소비되는 골드를 체계적으로 기록하고, 주간 골드
          수익을 한눈에 확인할 수 있는 사이트가 있으면 좋겠다는 생각에서
          프로젝트를 시작하게 되었습니다.
        </b>
        <br /> <br />
        저는 React, TypeScript와 사이트 배포를 위해 Render를 활용해 이 사이트를
        제작하였으며, 이를 통해 부족했던 기술을 보완하고, 회사에서 필요로 하는
        역량을 개발하고자 했습니다. 또한, 함께 게임을 즐기는 지인들과 다양한
        피드백을 주고받으며, 사이트를 점진적으로 발전시켜 나가고 있습니다.
      </div>
    ),
    main_func: <div>레이드 체크, 골드 계산, 추가 수입 및 소모 골드 기록</div>,
    git: (
      <a href="https://github.com/jsj487/RaidCalculate">
        https://github.com/jsj487/RaidCalculate{" "}
      </a>
    ),
    url: (
      <a href="https://raidcalculate.onrender.com/">
        https://raidcalculate.onrender.com/
      </a>
    ),
    frontend: "React, TypeScript, Styled-Components",
    backend: "Node.js, Render(Deploy)",
    modal_description: (
      <p>
        <h2 style={{ color: "red" }}>
          ※ 사이트를 체험하기 위해선 캐릭터 이름이 필요합니다. 캐릭터 검색란에
          "조승준"을 검색 해 주세요.
        </h2>
        <strong>
          ArkLator는 한 주 동안 LostArk를 통해 어느 정도의 수익을 얻을 수 있는지
          계산해주는 사이트입니다.
        </strong>
        <br /> <br />
        사이트에 접속하면 로스트아크 캐릭터의 닉네임을 검색할 수 있는 입력 창이
        표시됩니다. 닉네임을 검색한 뒤 서버를 선택하면, 레이드를 진행할 캐릭터를
        추가할 수 있는 섹션이 나타납니다. 이후, 왼쪽의 사이드 테이블을 사용하여
        참여한 레이드를 체크하면, 추가한 캐릭터들이 벌어들인 골드 수입을 확인할
        수 있습니다. 또한, 추가 수입과 소모 항목을 입력하여 보다 정확한 골드
        수익을 계산할 수 있습니다.
        <br /> <br />
        특히, ArkLator의 가장 큰 장점은 LocalStorage를 활용해 검색 기록과 레이드
        데이터를 저장한다는 점입니다. 이를 통해 컴퓨터를 꺼도 번거롭게 데이터를
        다시 입력할 필요 없이 간편하게 사용할 수 있습니다.
      </p>
    ),
    modal_func: (
      <ul>
        <li>
          <strong>캐릭터 추가</strong>: 원하는 캐릭터를 추가하여 각 캐릭터의
          레이드 수입을 확인할 수 있습니다.
        </li>
        <li>
          <strong>캐릭터 상세 보기</strong>: 추가한 캐릭터 이미지를 클릭하면,
          캐릭터를 보다 큰 화면에서 볼 수 있습니다.
        </li>
        <li>
          <strong>레이드 체크</strong>: 이번 주에 참여한 레이드를 체크하여 골드
          수입을 추적할 수 있습니다.
        </li>
        <li>
          <strong>추가 수입 및 소모 관리</strong>: 캐릭터별로 추가 수입과 소모
          골드를 기록하여 정확한 수입을 계산할 수 있습니다.
        </li>
        <li>
          <strong>자동 저장 기능</strong>: LocalStorage를 이용해 데이터를
          저장함으로써 반복 작업 없이 편리하게 이용할 수 있습니다.
        </li>
      </ul>
    ),
    story: (
      <p>
        ArkLator를 만들게 된 계기는 단순한 아이디어에서 시작되었습니다. 대학교
        4학년 때 처음 웹사이트 제작을 시작하며, 언젠가는 제가 가장 관심 있는
        게임과 관련된 사이트를 만들어보고 싶다는 목표를 품었습니다. 그러던 중,
        지인들이 외부 사이트를 이용해 골드를 계산하는 모습을 보고 직접
        제작해보기로 결심했습니다.
        <br />
        <br />
        개발 초기에는 지인들로부터 피드백을 받았지만, 보다 객관적이고 다양한
        의견이 필요하다고 느꼈습니다. 그래서 로스트아크 커뮤니티에 사이트를
        공유하고, 많은 유저들의 의견을 수렴했습니다. 이를 통해 사이트는 점점 더
        발전할 수 있었습니다.
        <br />
        <strong>
          <a href="https://www.inven.co.kr/board/lostark/6271/974503?my=post">
            https://www.inven.co.kr/board/lostark/6271/974503?my=post{" "}
          </a>
        </strong>
        <br />
        <br />
        ArkLator는 단순히 기술 스택을 발전시키기 위해 시작한 프로젝트였지만,
        많은 사람들의 호응을 얻으면서 꾸준히 발전시키고 유지하고 싶은 제 첫 번째
        웹사이트가 되었습니다.
      </p>
    ),
    stack: (
      <ul>
        <li>FrontEnd: React, TypeScript, Styled-Components</li>
        <li>BackEnd: Node.js</li>
        <li>Deployment: Render</li>
      </ul>
    ),
  },
  //푸드잇
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
          푸드잇은 사이트에 등록된 식당들을 대기열을 사용하여 예약을 할 수 있는
          웹사이트 입니다. 이 웹사이트는 학교 졸업 프로젝트로 시작한 저의 첫
          웹사이트입니다.
        </strong>
        <br />
        회원가입 시 식당 주인과 방문객을 구분하여 회원으로 등록하고 관리할 수
        있습니다.&nbsp;
        <strong>식당 주인으로 로그인</strong>하면 식당 주인 전용 페이지가 나타나
        현재 대기 중인 고객들과 그들의 정보를 확인할 수 있습니다.&nbsp;
        <strong>방문객으로 로그인</strong>하면 현재 위치를 기준으로 등록된 주변
        식당을 확인할 수 있으며, 예약 시 전화번호로 식당 입장 안내 문자를 받을
        수 있습니다.
      </p>
    ),
    modal_func: (
      <ul>
        <li>
          IP를 사용하여 행정 구역을 파악하고 동일한 행정 구역 내의 식당을 검색할
          수 있습니다.
        </li>
        <li>원하는 지역과 메뉴를 판매하는 식당을 검색할 수 있습니다.</li>
        <li>
          식당 예약 시 현재 남은 대기열과 식당 입장 안내 문자가 전송됩니다.
        </li>
        <li>
          식당 주인은 자신의 식당 대기열을 확인하고 대기열 삭제 또는 입장 안내
          문자를 전송할 수 있습니다.
        </li>
      </ul>
    ),
    story: (
      <p>
        식당 예약 사이트를 만들게 된 첫 번째 이유는 친구들과 밥을 먹다가 나온
        이야기 때문입니다. 현재 우리 사회에서는 코로나바이러스 때문에 대부분의
        식당이 키오스크를 도입했습니다. 키오스크가 도입되면서 요즘은 주문과
        결제도 테이블 위에 놓인 태블릿을 사용합니다. 그때 식당을 운영하는
        친구로부터 이런 키오스크가 구매가 아닌 대여로 매달 비용이 발생한다는
        이야기를 들었습니다. 이를 대체할 수 있는 웹사이트를 만들면 좋겠다는
        생각에서 시작했습니다.
        <br />
        <br />
        팀원들 중 아무도 이러한 웹사이트를 만들어 본 경험이 없었기 때문에 Git과
        Postman 사용법부터 역할 분담까지 모든 것이 낯설었습니다. 작성한 코드를
        어떻게 하면 더 효율적으로 만들 수 있을까보다는 기능 구현을 우선시했기
        때문에 지금 보면 다른 사람에게 보여주기 부끄러운 수준의 결과물이지만,
        당시 친구들과 밤늦게까지 학교에 남아 프로젝트를 더 잘 만들기 위해
        토론하고 열심히 작업한 경험이 현재의 프론트엔드 개발자인 저를 만들었다고
        생각합니다.
      </p>
    ),
    stack: (
      <ul>
        <li>FrontEnd: HTML, CSS, JavaScript</li>
        <li>BackEnd: Spring Boot</li>
        <li>DataBase: MySQL</li>
        <li>Deployment: VMware, CentOS, PostMan</li>
      </ul>
    ),
  },

  //CasaVerde
  {
    title: "CasaVerde(식물 판매 사이트)",
    members: "6인 프로젝트",
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
    modal_description: (
      <p>
        <strong>
          CasaVerde는 한국어로 '초록 집'을 의미하는 이탈리아어입니다. 이
          웹사이트는 부트캠프 과제로 주어진 쇼핑몰 주제에 맞춰 식물 관련 제품을
          판매하는 쇼핑몰입니다.
        </strong>
        <br />
        판매하는 제품에는 직접 기른 식물, 식물을 키울 수 있는 화분, 그리고 식물
        재배에 필요한 도구와 모종 키트가 포함됩니다.
      </p>
    ),
    modal_func: (
      <ul>
        <li>
          메인 화면에서 카테고리별로 가장 많이 팔린 제품을 볼 수 있습니다.
        </li>
        <li>카테고리별로 원하는 제품을 쉽게 찾을 수 있습니다.</li>
        <li>기본 회원 정보를 변경하고 구매한 제품을 확인할 수 있습니다.</li>
        <li>
          관리자 페이지에서 제품을 추가하거나 제거하고 배송 상태를 변경할 수
          있습니다.
        </li>
      </ul>
    ),
    story: (
      <p>
        쇼핑몰 주제가 식물 관련 사이트로 결정된 이유는 서로의 취미에 대해
        이야기하면서 정해졌습니다. 쇼핑몰 주제를 무엇으로 할지 논의하는 과정에서
        식물을 좋아하는 두 명의 팀원이 있었고, 이 주제가 좋다고 생각하여 모두의
        동의로 식물 관련 쇼핑몰을 만들게 되었습니다.
        <br />
        <br />
        프로젝트 기간은 단 2주였기 때문에 UI를 만들고 기능을 추가하는 데 바쁘게
        진행되었습니다. 그러던 중 한 팀원이 개인적인 사유로 프로젝트를 떠나게
        되어 원래 7인 프로젝트였지만 중간에 6인 프로젝트로 변경되었습니다. 떠난
        팀원은 저와 같은 프론트엔드 멤버였고, 팀원 중 제가 웹사이트 개발 경험이
        가장 많고 빨랐기 때문에 그의 역할도 함께 맡아 진행했습니다.
      </p>
    ),
    stack: (
      <ul>
        <li>FrontEnd : HTML, CSS, JavaScript</li>
        <li>BackEnd : -</li>
        <li>DataBase : MongoDB</li>
        <li>Deployment : VMware, PostMan</li>
      </ul>
    ),
  },

  //포트폴리오 사이트
  {
    title: "JSJ Portfolio(포트폴리오)",
    members: "1인 프로젝트",
    date: "2024.2 ~ (1인 프로젝트)",
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
    url: (
      <a href="https://jsj487.github.io/PORTFOLIO">
        https://jsj487.github.io/PORTFOLIO
      </a>
    ),
    frontend: "React, JavaScript, CSS",
    backend: "-",
    modal_description: (
      <p>
        <strong>
          제가 프론트엔드 개발자로서 쌓아온 것들을 보여주기 위한 웹사이트입니다.
          제가 개발한 사이트, 사용할 수 있는 기술 스택 등을 다른 사람들에게
          보여주기 위해 만들었습니다.
        </strong>
        <br />
        저의 기본 프로필(이름, 생년월일 등), 사용 가능한 기술 스택, 그리고 제가
        만든 웹사이트들을 페이지별로 분류하여 웹사이트를 보는 사람들이 원하는
        정보를 쉽게 찾을 수 있도록 구성했습니다.
      </p>
    ),
    modal_func: (
      <ul>
        <li>제가 할 수 있는 것과 해왔던 일을 확인할 수 있습니다.</li>
      </ul>
    ),
    story: (
      <p>
        학교를 졸업한 후, 회사를 지원하기 위해 이력서를 작성하던 중 이력서가
        비어있는 것을 보았습니다. 회사가 무엇을 믿고 저를 뽑을 것인지 고민하게
        되었고, 저를 보여줄 무언가가 필요하다고 생각하여 포트폴리오 사이트를
        만들게 되었습니다.
        <br />
        <br />
        제작 방법은 제가 배우고 있던 React의 숙련도를 높이기 위해 React를
        사용하여 제작했습니다. 가장 고민했던 부분은 디자인이었습니다. 어떻게
        하면 제 정보를 효율적으로 전달할 수 있을지 고민했습니다. 다양한
        포트폴리오 사이트를 참고하면서 차별화를 시도한 결과가 현재의
        사이트입니다.
      </p>
    ),
    stack: (
      <ul>
        <li>FrontEnd: React, CSS, JavaScript</li>
      </ul>
    ),
  },
];
