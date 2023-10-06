import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from "react-router-dom";
import {ServicesPage} from "./components/pages/ServicesPage";
import App from "./App";
import {Contact} from "./components/pages/Contact";
import {IndexPage} from "./components/pages/IndexPage";
import {DoctorsPage} from "./components/pages/DoctorsPage";

export const router = createBrowserRouter([
    {
        path: "/index",
        element: <IndexPage/>,
        // loader: rootLoader,
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
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
