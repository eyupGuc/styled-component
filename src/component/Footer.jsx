import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import { StyleFooter } from "./styles/Footer.styled";
import { Logo } from "./styles/Header.styled";

export const Footer = () => {
  return (
    <StyleFooter>
      <Container>
        <Flex>
          <Logo src="./images/logo_white.png" />
        </Flex>
      </Container>
    </StyleFooter>
  );
};
