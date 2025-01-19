import Row from "./Row"

function Card({card}) {
  return (
    <Row type="horizontal" style={{background: "var(--color-grey-200", padding: "1rem", "border-radius": "2rem"}}>
      <div>{card.title}</div>
      <div>{card.amount}</div>
    </Row>
  )
}

export default Card