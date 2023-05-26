import "./App.css";
import HeroDesktop from "./components/HeroDesktop";
import HeroMovil from "./components/HeroMovil";
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
    </div>
  );
}

export default App;
