import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import Heading from "./Heading";

const StyledLogo = styled.div`
  text-align: center;
`;


function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Heading as="h4">Flex System</Heading>
    </StyledLogo>
  );
}

export default Logo;
