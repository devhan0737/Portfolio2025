import React from "react";
import styled from "styled-components";

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

const PillgramInfo = () => {
  const { id } = useParams(); // URL에서 id를 가져옴

  const project = PROJECTDATA.find((data) => data.id === parseInt(id));

  return (
    <Container>
      <SectionTitle>{project.title}</SectionTitle>
      <SectionInfo>
        <PointText dangerouslySetInnerHTML={{ __html: project.subtitle }} />
        <p>주요 기능: {project.main_function}</p>
        <p>기술 스택: {project.main_technoloy}</p>
        <p>기여도: {project.contribution}</p>
        <p>
          GitHub:{" "}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            {project.github}
          </a>
        </p>
        <p>
          URL:{" "}
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.url}
          </a>
        </p>
        <p>문제: {project.troble}</p>
      </SectionInfo>
    </Container>
  );
};

export default PillgramInfo;
