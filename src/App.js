import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/index";
// import Archive from "./components/Archive/";
import CryptoNews from "./components/Crypto";
import Contact from "./components/Contact";
import Travel from "./components/Travel";

import "./index.css";
function App() {
  return (
    <>
      <Header />
      {/* <Archive /> */}
      <CryptoNews />
      <Contact />
      <Travel />
      <GlobalStyle />
    </>
  );
}

export default App;
