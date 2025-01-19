import { HiClipboard, HiClipboardDocument, HiOutlineClipboard, HiOutlinePencil, HiOutlinePlusSmall, HiOutlineTrash } from "react-icons/hi2";
import Heading from "../../ui/Heading";
import ButtonIcon from "../../ui/ButtonIcon";
import styled from "styled-components";

const StyleCardContainer = styled.div`
  background-color: var(--color-grey-0);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


function SummaryCard({summary}) {
  return (
    <StyleCardContainer>
      <Heading as="h3">{summary.title}</Heading>
      <div style={{ color: "var(--color-grey-500)" }}>{summary.subtitle}</div>
      <Heading as="h4">{summary.amount}</Heading>
      <div>
        <ul style={{ display: "flex", gap: "1rem" }}>
          <li>
            <ButtonIcon>
              <HiOutlinePencil />
            </ButtonIcon>
          </li>
          <li>
            <ButtonIcon>
              <HiOutlineClipboard />
            </ButtonIcon>
          </li>
          <li>
            <ButtonIcon>
              <HiOutlineTrash />
            </ButtonIcon>
          </li>
        </ul>
      </div>
    </StyleCardContainer>
  );
} 

export default SummaryCard;