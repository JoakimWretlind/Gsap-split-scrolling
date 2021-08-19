import { GlobalStyle } from './globalStyling';
import { Home, About, Work, Contact } from './components/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
