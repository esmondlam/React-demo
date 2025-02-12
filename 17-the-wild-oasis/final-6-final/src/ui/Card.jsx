import Row from "./Row";

function Card({ card }) {
  return (
    <Row
      onClick={() => alert(card.id)}
      type="horizontal"
      style={{
        background: "var(--color-grey-200",
        padding: "1rem",
        borderRadius: "2rem",
      }}
    >
      <div>{card.title}</div>
      <div>{card.amount}</div>
    </Row>
  );
}

export default Card;
