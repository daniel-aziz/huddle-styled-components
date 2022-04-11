import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components"; 

const theme = {
  colors :{
    header : '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Header/>
      <Container className="App">
        <h1>Hello World!</h1>
      </Container>
    </>
    </ThemeProvider>
  );

}

export default App;
