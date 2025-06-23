import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { mq } from "../../lib/mediaQuery";
import link from "../../assets/img/link.svg";
import { SKILLICON } from "../../assets/Value/Skilldata";
import { PROJECTARR } from "./../../constants/ProjectDetail";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 156px);
  line-height: 32px;
  color: #fff;
  ${mq("desktop")} {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;
const SectionTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  align-items: center;
  ${mq("desktop")} {
    font-size: 4.8rem;
  }
`;
const Link = styled.div`
  width: 20px;
  height: 20px;
  a {
    display: flex;
  }
  ${mq("desktop")} {
    padding-top: 6px;
    width: 2.4rem;
    height: 2.4rem;
  }
`;
const SectionInfo = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${mq("desktop")} {
    font-size: 1.8rem;
    gap: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    color: #c1c1c1;
  }
`;
const SubInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${mq("desktop")} {
    align-items: center;
    flex-direction: row;
    gap: 40px;
  }
`;

const LinkBox = styled.div`
  width: 32px;
  height: 32px;
  img {
    width: 24px;
    height: 24px;
  }
`;

const TechIcon = styled.div`
  display: flex;
  gap: 8px;
`;
const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const PointText = styled.div`
  width: 100%;
  span {
    color: #00d857;
  }
`;

const ProjectDetail = () => {
  const { id } = useParams(); // URL에서 id를 가져옴

  const project = PROJECTARR.find((data) => data.id === parseInt(id));

  // 기술 스택 아이콘 매핑 함수
  const renderTechIcons = (technologies) => {
    return technologies.map((tech) => {
      const icon = SKILLICON.find(
        (icon) => icon.skill.toLowerCase() === tech.toLowerCase()
      ); // 기술 이름과 아이콘 매핑
      return icon ? <SkillIcon key={tech} src={icon.src} alt={tech} /> : null; // 아이콘 렌더링
    });
  };

  return (
    <Container>
      <SectionTitle>
        {project.title}
        <Link>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={link} alt="링크 아이콘" />
          </a>
        </Link>
      </SectionTitle>
      <SectionInfo>
        <Info>
          <span>프로젝트 설명</span>
          {project.preview}
        </Info>
        <Info>
          <span>주요 기능</span>
          {project.main_function}
        </Info>
        <SubInfo>
          <Info>
            <span>기술 스택</span>
            {/* {project.main_technoloy} */}
            <TechIcon>{renderTechIcons(project.main_technoloy)}</TechIcon>
          </Info>
          <Info>
            <span>기여도</span> {project.contribution}
          </Info>
          <Info>
            <span>깃허브</span>
            <LinkBox>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link} alt="" />
              </a>
            </LinkBox>
          </Info>
        </SubInfo>
        <Info>
          <span>디테일</span>
          <PointText dangerouslySetInnerHTML={{ __html: project.subtitle }} />
        </Info>
        <Info>
          <span>트러블 슈팅</span>
          <PointText dangerouslySetInnerHTML={{ __html: project.trouble }} />
        </Info>
      </SectionInfo>
    </Container>
  );
};

export default ProjectDetail;
