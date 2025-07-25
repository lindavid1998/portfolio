import styled from "styled-components";
import { Experience } from "./Experience";
import experience from "./experience.json";

const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export default function WorkExperience() {
  return (
    <Container id="work-experience">
      <h1>Work Experience</h1>

      {experience.map((e, index) => (
        <Experience
          key={index}
          company={e.company}
          title={e.title}
          description={e.description}
          start={e.start}
          end={e.end}
          stack={e.stack}
          linkedin={e.linkedin}
        />
      ))}
    </Container>
  );
}
