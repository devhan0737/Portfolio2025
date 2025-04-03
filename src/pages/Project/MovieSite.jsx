import React from "react";
import styled from "styled-components";
import { INFOLIST, project } from "../../assets/Value/ProjectInfo";
import { mq } from "./../../lib/mediaQuery";

const Container = styled.div`
  padding: 40px 0;
  margin-top: 56px;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectTitle = styled.h2`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  ${mq("desktop")} {
    font-size: 2.8rem;
  }
`;

const ProjectInfoBox = styled.div`
  border-radius: 30px;
  white-space: pre-line;
  line-height: 1.6;
  background: #454141;
  width: 100%;
  padding: 20px;
  ${mq("desktop")} {
    font-size: 1.8rem;
  }

  span {
    max-width: 56px;
    width: 100%;
    color: #00d857;
    ${mq("desktop")} {
      max-width: 100px;
    }
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  li {
    display: flex;
    gap: 8px;
    width: 100%;
  }
  p,
  a {
    display: inline;
    margin-left: 5px;
  }
`;

const MovieSite = () => {
  return (
    <Container>
      <Section>
        <ProjectTitle>프로젝트 소개 - {project.name}</ProjectTitle>

        <ProjectInfoBox
          dangerouslySetInnerHTML={{ __html: project.subtitle }}
        />
      </Section>

      <Section>
        <ProjectTitle>주요 정보 및 링크 정보</ProjectTitle>
        <ProjectInfoBox>
          <ul>
            {INFOLIST.map((item, index) => (
              <li key={index}>
                <span>{item.label}</span>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.detail}
                  </a>
                ) : (
                  <p>{item.detail}</p>
                )}
              </li>
            ))}
          </ul>
        </ProjectInfoBox>
      </Section>

      <Section>
        <ProjectTitle>트러블 슈팅</ProjectTitle>
        <ProjectInfoBox>{project.troble}</ProjectInfoBox>
      </Section>
    </Container>
  );
};

export default MovieSite;
