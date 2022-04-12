import { StyledHeader } from "./styles/Header.styled"
import {Container} from "./styles/Container.styled"
import {Nav, Logo} from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                <Logo src="./images/logo.svg" alt=""/>
                <Button>Try It Free</Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}