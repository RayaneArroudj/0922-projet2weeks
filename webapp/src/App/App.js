import { Routes, Route } from 'react-router-dom';
import CreateWilder from '../page/CreateWilder/CreateWilder';
import Home from '../page/Home/Home';
import { CREATE_WILDER_PATH, HOME_PATH } from '../page/paths';

import {
  Container,
  Footer,
  Header,
  MainContainer,
  PageTitle,
  PageTitleLink,
} from './App.styled';

function App() {
  return (
    <>
      <Header>
        <Container>
          <PageTitle>
            <PageTitleLink to={HOME_PATH}>Wilders Book</PageTitleLink>
          </PageTitle>
        </Container>
      </Header>
      <MainContainer>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={CREATE_WILDER_PATH} element={<CreateWilder />} />
        </Routes>
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
