import SkillBadge from "../../components/SkillBadge";
import styled from "styled-components";

let skillToIcon = new Map([
  ["TypeScript", "ts"],
  ["React", "react"],
  ["Python", "python"],
  ["Node.js", "nodejs"],
  ["Next.js", "nextjs"],
  ["PostgreSQL", "postgresql"],
  ["Jest", "jest"],
  ["Tailwind", "tailwind"],
]);

const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Badges = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`

function Skills() {
  return (
    <Container>
      <h1>Skills</h1>
      <Badges>
        {Array.from(skillToIcon).map(([key, value]) => (
          <SkillBadge key={key} name={key} imgUrl={value} />
        ))}
      </Badges>
    </Container>
  );
}

export default Skills;
