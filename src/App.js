import "./App.css";
import Barra from "./components/Barra";
import Footer from "./components/Footer";
import Galery from "./components/Galery";
import HeroDesktop from "./components/HeroDesktop";
import HeroMovil from "./components/HeroMovil";
import Media from "./components/Media";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Services from "./components/Services";
import Botones from "./components/Botones";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroMovil />
      <HeroDesktop />
      <Nosotros />
      <Services />
      <Barra />
      <Galery />
      <Media />
      <Botones />
      <Footer />
    </div>
  );
}

export default App;
