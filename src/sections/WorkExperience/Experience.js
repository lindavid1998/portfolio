import styled from "styled-components";
import Button from "../../components/Button";
import Stack from "../Projects/Stack";

const Container = styled.div`
  display: flex;
  height: fit-content;
  width: 80%;
  gap: 40px;
  justify-content: center;
  padding: 20px;
  max-width: 800px;

  @media (max-width: 850px) {
    background-color: var(--dark-gray-background);
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  // margin-top: auto;
  min-height: 80px;
  // align-items: flex-end;
`;

const Subheader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Experience({
  company,
  title,
  description,
  start,
  end,
  stack,
  linkedin,
}) {
  return (
    <Container>
      <Info>
        <h3 className="glow-underline">{title}</h3>
        <Subheader>
          <p>{company}</p>
          <p>
            {start}-{end ? end : "Present"}
          </p>
        </Subheader>

        <Description>
          {description.map((bullet, i) => (
            <p key={i}>- {bullet}</p>
          ))}
        </Description>

        <Stack stack={stack} />

        <Buttons>
          <a href={linkedin}>
            <Button color="primary" text="LinkedIn" />
          </a>
        </Buttons>
      </Info>
    </Container>
  );
}
