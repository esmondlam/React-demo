import styled from "styled-components";
import Button from "./Button";

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: end;
  margin-top: 2rem;
`;

const SplitContainer = styled.div`
  display: flex;
  gap: 1rem;

  & > .main-content {
    flex-basis: 60rem;
  }

  & > ${ButtonContainer} {
    flex-basis: 40rem;
    flex-shrink: 1;
  }

  &:not(:has(form)) {
    ${ButtonContainer} {
      display: none;
    }
  }
`;

function TemplateContainer({ main, side }) {
  return (
    <SplitContainer>
      {main}
      <div>
        {side}
        <ButtonContainer>
          <Button size="medium" variation="secondary">
            Preview
          </Button>
          <Button size="medium">Save</Button>
        </ButtonContainer>
      </div>
    </SplitContainer>
  );
}

export default TemplateContainer;
