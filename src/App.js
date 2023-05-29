import "./App.css";
import Barra from "./components/Barra";
import Galery from "./components/Galery";
import HeroDesktop from "./components/HeroDesktop";
import HeroMovil from "./components/HeroMovil";
import Media from "./components/Media";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroMovil />
      <HeroDesktop />
      <Nosotros />
      <Services />
      <Galery/>
      <Media/>
      <Barra/>
    </div>
  );
}

export default App;
