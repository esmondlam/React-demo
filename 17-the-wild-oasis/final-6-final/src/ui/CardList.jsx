import styled from "styled-components";
import Card from "./Card";

const StyledCardList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
  gap: 2rem;
`;
function CardList({ cardList }) {
  return (
    <StyledCardList>
      {cardList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </StyledCardList>
  );
}

export default CardList;
