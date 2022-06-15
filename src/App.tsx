import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './Header';
import { AppContainer } from './appContaiter'
import { Main } from './Main';
import { Footer } from './Footer';


function App() {
  return (
    <AppContainer>
      <GlobalStyles/>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;
