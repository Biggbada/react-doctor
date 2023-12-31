import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "./components/pages/HomePage";
import App from "./App";
import {Contact} from "./components/pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        // loader: rootLoader,
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
