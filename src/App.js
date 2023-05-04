import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/index";
import World from "./components/World/index";
import CryptoNews from "./components/Crypto";
import Contact from "./components/Contact";
import Travel from "./components/Travel";
import Footer from "./components/Footer";
import "./index.css";
import Politics from "./components/Politics";
function App() {
  return (
    <>
      <Header />
      <CryptoNews />
      <Politics />
      <Contact />
      <Travel />
      <World />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
