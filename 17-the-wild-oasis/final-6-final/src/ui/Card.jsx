import { useNavigate } from "react-router-dom";
import Row from "./Row";
import styled from "styled-components";
import Button from "./Button";

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3rem;
  gap: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-grey-200);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
`;

function Card({ card, index, focusElem, navigateCard, subtractCard }) {
  const route = `card${index}`;

  return (
    <FlexContainer>
      <CardContainer
        type="horizontal"
        data-route={route}
        className={`${focusElem === route ? "focus" : ""} hover-animation`}
        onClick={navigateCard}
      >
        <div>{card.label === "" ? "---" : card.label}</div>
        <div>{card.query === "" ? "---" : card.query}</div>
      </CardContainer>
      <Button
        variation="danger"
        size="small"
        onClick={() => subtractCard(card.id)}
      >
        -
      </Button>
    </FlexContainer>
  );
}

export default Card;
