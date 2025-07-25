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
  margin-top: auto;
  min-height: 80px;
  align-items: flex-end;
`;

const Background = styled.div`
  width: 120px;
  height: 8px;
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    #ff6b6b 50%,
    var(--accent-color) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
  transform: rotate(-0.01turn);
  position: relative;
  top: -1rem;
  left: -0.5rem;
  z-index: -99;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
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
        <h3>{company}</h3>
        <Background className="bg"></Background>
        <div>{title}</div>
        <p>
          {start}-{end ? end : "Present"}
        </p>

        <Description>
          {description.map((bullet, i) => (
            <p key={i}>- {bullet}</p>
          ))}
        </Description>

        <Stack stack={stack} />

        <Buttons>
          <a href={linkedin}>
            <Button color="secondary" text="LinkedIn" />
          </a>
        </Buttons>
      </Info>
    </Container>
  );
}
