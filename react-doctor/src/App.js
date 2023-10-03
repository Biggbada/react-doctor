import './App.css';
import {PreHeader} from "./components/header/PreHeader";
import {Navbar} from "./components/header/Navbar";
import {HeroHeader} from "./components/HeroHeader";
import {FooterContainer} from "./components/footer/FooterContainer";
import {RouterProvider} from "react-router-dom";
import {router} from "./index";

function App() {

    return (
        <div className="App">
            <PreHeader/>
            <Navbar/>
            <HeroHeader/>
            <RouterProvider router={router}/>
            <FooterContainer/>
        </div>
    );
}

export default App;
