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
import {ErrorPage} from "./components/pages/ErrorPage";
import {Departments} from "./components/pages/Departments";
import {Blog} from "./components/pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        // loader: rootLoader,
        children: [
            {
                path: "",
                index: true,
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
            },
            {
                path: "department",
                element: <Departments/>,
            },
            {
                path: 'department/:id',
                element: <ServicesPage/>
            },
            {
                path: 'blog',
                element: <Blog/>
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
