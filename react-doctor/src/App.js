import logo from './logo.svg';
import './App.css';
import {PreHeader} from "./components/header/PreHeader";
import {Navbar} from "./components/header/Navbar";
import {HeroHeader} from "./components/HeroHeader";
import {ServicesContainer} from "./components/ServicesContainer";
import {HeroCallToAction} from "./components/HeroCallToAction";
import {FooterContainer} from "./components/footer/FooterContainer";

function App() {

  return (
    <div className="App">
        <PreHeader />
        <Navbar />
        <HeroHeader />
        <ServicesContainer />
        <HeroCallToAction />
        <FooterContainer />



    </div>
  );
}

export default App;
