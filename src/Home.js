import styled from "styled-components";
import React from "react";
import backgroundImg from "./img/background.jpg";
import FrontEnd from "./img/FrontEnd.png";
import VersionControl from "./img/VersionControl.png";
import Certificate from "./img/Certificate.png";
import skills6 from "./img/skills6.png";
import skills7 from "./img/skills7.png";
import { IoPersonSharp, IoPhonePortrait, IoMail } from "react-icons/io5";
import { FaCalendar, FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";

function Home() {
  return (
    <div>
      <Header>
        <Header_Title>JSJ PORTFOLIO</Header_Title>
        <Header_Content>
          <div>About Me</div>
          <div>Skills</div>
          <div>Project</div>
        </Header_Content>
      </Header>
      <Title>
        <Title_Container>
          <Title_Main>
            조승준
            <br />
            프론트엔드 개발자 포트폴리오
          </Title_Main>
          <hr />
          <Title_Content>
            안녕하세요.
            <br />
            발전을 위해 항상 생각하는 프론트엔드 웹 개발자입니다.
            <br />제 사이트가 어떻게 하면 더 발전을 할 수 있을까 항상 생각하며
            고민하는 것이 제 장점입니다.
          </Title_Content>
        </Title_Container>
      </Title>

      <AboutMe>
        <AboutMe_Title>ABOUT ME</AboutMe_Title>
        <AboutMe_Wrapper>
          <AboutMe_Container>
            <AboutMe_Content>
              <AboutMe_Img_Conatiner>
                <IoPersonSharp size={70} />
              </AboutMe_Img_Conatiner>
              <AboutMe_Info_Container>
                <AboutMe_Info_Title>이름</AboutMe_Info_Title>
                <AboutMe_Info>조승준</AboutMe_Info>
              </AboutMe_Info_Container>
            </AboutMe_Content>
          </AboutMe_Container>

          <AboutMe_Container>
            <AboutMe_Content>
              <AboutMe_Img_Conatiner>
                <FaCalendar size={70} />
              </AboutMe_Img_Conatiner>
              <AboutMe_Info_Container>
                <AboutMe_Info_Title>생년월일</AboutMe_Info_Title>
                <AboutMe_Info>1999.07.30</AboutMe_Info>
              </AboutMe_Info_Container>
            </AboutMe_Content>
          </AboutMe_Container>

          <AboutMe_Container>
            <AboutMe_Content>
              <AboutMe_Img_Conatiner>
                <FaMapMarkerAlt size={70} />
              </AboutMe_Img_Conatiner>
              <AboutMe_Info_Container>
                <AboutMe_Info_Title>거주지</AboutMe_Info_Title>
                <AboutMe_Info>서울특별시 강동구</AboutMe_Info>
              </AboutMe_Info_Container>
            </AboutMe_Content>
          </AboutMe_Container>

          <AboutMe_Container>
            <AboutMe_Content>
              <AboutMe_Img_Conatiner>
                <IoPhonePortrait size={70} />
              </AboutMe_Img_Conatiner>
              <AboutMe_Info_Container>
                <AboutMe_Info_Title>연락처</AboutMe_Info_Title>
                <AboutMe_Info>010-8964-9828</AboutMe_Info>
              </AboutMe_Info_Container>
            </AboutMe_Content>
          </AboutMe_Container>

          <AboutMe_Container>
            <AboutMe_Content>
              <AboutMe_Img_Conatiner>
                <IoMail size={70} />
              </AboutMe_Img_Conatiner>
              <AboutMe_Info_Container>
                <AboutMe_Info_Title>이메일</AboutMe_Info_Title>
                <AboutMe_Info>jsj487@naver.com</AboutMe_Info>
              </AboutMe_Info_Container>
            </AboutMe_Content>
          </AboutMe_Container>

          <AboutMe_Container>
            <AboutMe_Content>
              <AboutMe_Img_Conatiner>
                <FaPencilAlt size={70} />
              </AboutMe_Img_Conatiner>
              <AboutMe_Info_Container>
                <AboutMe_Info_Title>학력</AboutMe_Info_Title>
                <AboutMe_Info>
                  성결대학교
                  <br />
                  (정보통신공학부)
                </AboutMe_Info>
              </AboutMe_Info_Container>
            </AboutMe_Content>
          </AboutMe_Container>
        </AboutMe_Wrapper>
      </AboutMe>

      <Skill>
        <Skill_Container>
          <Skill_Title>SKILLS</Skill_Title>
          <Skill_Content_Container>
            <Skill_WhiteBoard>
              <div>FrontEnd</div>
              <img src={FrontEnd} alt="Front" />
            </Skill_WhiteBoard>
            <Skill_WhiteBoard>
              <div>VersionControl</div>
              <img src={VersionControl} alt="Version" />
            </Skill_WhiteBoard>
            <Skill_WhiteBoard>
              <div>Certificate</div>
              <img src={Certificate} alt="QNET" />
            </Skill_WhiteBoard>
            <Skill_WhiteBoard>
              <div>Communication</div>
              <img src={skills6} alt="Figma" />
            </Skill_WhiteBoard>
            <Skill_WhiteBoard>
              <div>Deployment</div>
              <img src={skills7} alt="Postman" />
            </Skill_WhiteBoard>
          </Skill_Content_Container>
        </Skill_Container>
      </Skill>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 0px;
`;

const Header_Title = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

const Header_Content = styled.div`
  display: flex;
  align-items: center;
  div {
    padding: 0 20px;
    font-weight: 600;
    font-size: 20px;
  }
`;

const Title = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(112, 93, 80, 0.8) 0,
        rgba(112, 93, 80, 0.8) 90%
      ),
      url(${backgroundImg}) 50% no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Title_Container = styled.div`
  width: 100%;
  max-width: 71.25rem;
  text-align: center;
  padding: 8.5rem 2rem 4rem;
  margin: 0 auto;
  hr {
    margin: 40px 0px;
  }
`;
const Title_Main = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #fff;
`;
const Title_Content = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #d9d9d9;
`;

const AboutMe = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
`;
const AboutMe_Title = styled.div`
  margin: 0px auto 3rem;
  text-align: center;
  font-weight: 700;
  font-size: 50px;
`;
const AboutMe_Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  opacity: 0.8;
`;
const AboutMe_Container = styled.div`
  width: 33.33333%;
  margin-bottom: 50px;
`;
const AboutMe_Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 14rem;
  margin: 0 auto;
  opacity: 0.8;
`;
const AboutMe_Img_Conatiner = styled.div`
  margin-right: 30px;
`;
const AboutMe_Info_Container = styled.div``;
const AboutMe_Info_Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;
const AboutMe_Info = styled.div`
  font-weight: 400;
  font-size: 15px;
`;

const Skill = styled.div`
  background-color: #f9c51d;
`;
const Skill_Container = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
`;
const Skill_Title = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 30px;
`;
const Skill_Content_Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  flex-direction: row;
`;
const Skill_WhiteBoard = styled.div`
  width: 17rem;
  padding: 1.5rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
  div {
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ccc;
    font-weight: 700;
    font-size: 1.5rem;
    color: #f4623a;
  }

  img {
    width: 100%;
  }
`;

export default Home;
