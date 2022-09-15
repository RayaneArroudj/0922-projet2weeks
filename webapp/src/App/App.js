import Home from '../page/Home/Home';
import {
  Container,
  Footer,
  Header,
  MainContainer,
  PageTitle,
} from './App.styled';

function App() {
  return (
    <>
      <Header>
        <Container>
          <PageTitle>Wilders Book</PageTitle>
        </Container>
      </Header>
      <MainContainer>
        <Home />
      </MainContainer>
      <Footer>
        <Container>
          <p>&copy; 2022 Wild Code School</p>
        </Container>
      </Footer>
    </>
  );
}

export default App;