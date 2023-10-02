import logo from './logo.svg';
import './App.css';
import {PreHeader} from "./components/PreHeader";
import {Navbar} from "./components/Navbar";
import {HeroHeader} from "./components/HeroHeader";
import {ServicesContainer} from "./components/ServicesContainer";
import {ServiceItem} from "./components/ServiceItem";
import {HeroCallToAction} from "./components/HeroCallToAction";
import {FooterContainer} from "./components/FooterContainer";

function App() {
    const services = [
        {id: 1, title: "Child care", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images/service/service-1.jpg"},
        {id: 1, title: "Personal Care", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images//service/service-2.jpg"},
        {id: 1, title: "CT scan", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images/service/service-3.jpg"},
        {id: 1, title: "Joint replacement", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images/service/service-4.jpg"},
        {id: 1, title: "Examination & Diagnosis", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images/service/service-5.jpg"},
        {id: 1, title: "Alzheimer's disease", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images/service/service-6.jpg"},
    ]
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
