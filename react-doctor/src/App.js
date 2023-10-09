import './App.css';
import {PreHeader} from "./components/header/PreHeader";
import {FooterContainer} from "./components/footer/FooterContainer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {IndexPage} from "./components/pages/IndexPage";
import {ServicesPage} from "./components/pages/ServicesPage";
import {DoctorsPage} from "./components/pages/DoctorsPage";
import {Contact} from "./components/pages/Contact";
import React from "react";
import {Root} from "./components/pages/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        // loader: rootLoader,
        children: [
            {
                path: "",
                element: <IndexPage/>
            },
            {
                path: "services",
                element: <ServicesPage/>,
                // loader: rootLoader,
            },
            {
                path: "doctor",
                element: <DoctorsPage/>
            },
            {
                path: "contact",
                element: <Contact/>,
            }
        ]
    },

]);

function App() {

    return (
        <div className="App">
            <PreHeader/>
            <RouterProvider router={router}/>
            <FooterContainer/>
        </div>
    );
}

export default App;
