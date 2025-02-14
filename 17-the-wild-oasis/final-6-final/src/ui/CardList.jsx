import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledCardList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
  gap: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

function CardList({ cardList, navigateCard, focusElem, setFormValues }) {
  const navigate = useNavigate();
  const addCard = () => {
    const nextId =
      cardList.length > 0 ? cardList[cardList.length - 1].id + 1 : 1;
    const newCardDefaultState = {
      id: nextId,
      label: "",
      query: "",
    };
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      cards: [...cardList, newCardDefaultState],
    }));
  };

  const subtractCard = (id) => {
    const filterdCardList = cardList.filter((card) => card.id !== id);
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      cards: [...filterdCardList],
    }));
    navigate("/templates/barchart");
  };

  return (
    <StyledCardList>
      {cardList.map((card, index) => (
        <Card
          key={card.id}
          index={index + 1}
          card={card}
          focusElem={focusElem}
          subtractCard={subtractCard}
          navigateCard={navigateCard}
        />
      ))}
      {cardList.length < 4 ? (
        <ButtonContainer>
          <Button variation="circular" onClick={addCard}>
            +
          </Button>
        </ButtonContainer>
      ) : (
        <></>
      )}
    </StyledCardList>
  );
}

export default CardList;
