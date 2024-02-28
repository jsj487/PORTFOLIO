import React from "react";
import styled from "styled-components";

import FrontEndIcon from "./img/FrontEnd.png";
import VersionControlIcon from "./img/VersionControl.png";
import CertificateIcon from "./img/Certificate.png";
import Skills6Icon from "./img/skills6.png";
import Skills7Icon from "./img/skills7.png";

const SectionTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 30px;
`;

const Skill = styled.div`
  background-color: #f9c51d;
`;

const SkillContainer = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

const SkillContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  flex-direction: row;

  img {
    width: 100%;
  }
`;

const WhiteBoard = styled.div`
  width: 17rem;
  padding: 1.5rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, 0.2);
  transition: width 0.5s ease;

  &:hover {
    width: 18rem;
  }
`;

const SkillTitle = styled.div`
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
`;

const skillsData = [
  { title: "FrontEnd", icon: FrontEndIcon, alt: "Front" },
  { title: "VersionControl", icon: VersionControlIcon, alt: "Version" },
  { title: "Certificate", icon: CertificateIcon, alt: "QNET" },
  { title: "Communication", icon: Skills6Icon, alt: "Figma" },
  { title: "Deployment", icon: Skills7Icon, alt: "Postman" },
];

function Skills() {
  return (
    <div>
      <Skill>
        <SkillContainer>
          <SectionTitle>SKILLS</SectionTitle>
          <SkillContentContainer>
            {skillsData.map((skill, index) => (
              <WhiteBoard key={index}>
                <SkillTitle>{skill.title}</SkillTitle>
                <img src={skill.icon} alt={skill.alt} />
              </WhiteBoard>
            ))}
          </SkillContentContainer>
        </SkillContainer>
      </Skill>
    </div>
  );
}

export default Skills;
