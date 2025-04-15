import styled from "styled-components";
import { PROJECTDATA } from "../assets/Value/Projectdata";
import { mq } from "../lib/mediaQuery";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 56px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${mq("desktop")} {
    gap: 40px;
  }
`;
const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.6rem;
  ${mq("desktop")} {
    font-size: 1.8rem;
  }
  PointText {
    max-width: 600px;
    width: 100%;
    font-size: 1.8rem;
  }
`;
const PointText = styled.span`
  max-width: 600px;
  width: 100%;
  font-size: 2.4rem;
  font-weight: 300;
  ${mq("desktop")} {
    font-size: 4.4rem;
  }
`;
const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  ${mq("desktop")} {
    font-size: 2.4rem;
  }
`;

const ProjectWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;

  ${mq("desktop")} {
    gap: 20px;
    padding: 60px 0 60px 0;
  }
`;
const ProjectBox = styled.li`
  aspect-ratio: 9/5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px;
  width: 100%;
  border-radius: 30px;
  background: #454141;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${mq("desktop")} {
    width: 100%;
  }

  &:hover {
    color: #00d857;
    transform: scale(1.05);
    opacity: 0.95;
  }
  &:hover .period-text {
    color: #00d857;
  }
  .littleTitle {
    width: fit-content;
    font-size: 2rem;
    font-weight: 700;
    position: relative;
    display: inline-block;

    ${mq("desktop")} {
      font-size: 3.2rem;
    }
  }

  .littleTitle::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: #00d857;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.1s ease-in-out;
  }

  &:hover .littleTitle::after {
    transform: scaleX(1);
  }
  img {
    transition: filter 0.1s ease-in-out;
  }

  &:hover img {
    filter: brightness(0) saturate(100%) invert(52%) sepia(99%) saturate(553%)
      hue-rotate(75deg) brightness(90%) contrast(92%);
  }
`;
const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ProjectName = styled.h3`
  width: 100%;
  font-size: 2rem;
  ${mq("desktop")} {
    font-size: 3.2rem;
  }
`;
const Comments = styled.p`
  width: 100%;
  font-size: 1.6rem;
`;
const Right = styled.div`
  text-align: right;
  font-size: 1.6rem;
  color: #ccc;
`;

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null); // 추가
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    const project = PROJECTDATA.find((item) => item.id === id);
    setSelectedProject(project);
    navigate(`/project/${id}`); // 상세 페이지로 이동
  };

  return (
    <Container>
      <SectionTitle>Project</SectionTitle>
      <SectionInfo>
        <PointText>
          배운 내용을 프로젝트에 적용하며, 실력을 쌓아가고 있습니다
        </PointText>
        <p>React를 활용한 프로젝트입니다.</p>
      </SectionInfo>

      <ProjectWrapper>
        {PROJECTDATA.map((data) => (
          <ProjectBox key={data.id} onClick={() => handleProjectClick(data.id)}>
            <ProjectInfo>
              <ProjectName className="littleTitle">{data.title}</ProjectName>
              <Comments>{data.comments}</Comments>
            </ProjectInfo>
            <Right className="period-text">
              <p>{data.period}</p>
            </Right>
          </ProjectBox>
        ))}
      </ProjectWrapper>
    </Container>
  );
};

export default Project;
