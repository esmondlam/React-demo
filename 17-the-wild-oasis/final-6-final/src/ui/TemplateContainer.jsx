import styled from "styled-components";

const SplitContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 60rem;
  gap: 1rem;
  min-height: 80vh;
`
function TemplateContainer({main, side}) {
  return (
    <SplitContainer>
      {main}
      {side}
    </SplitContainer>
    
  )
}

export default TemplateContainer;