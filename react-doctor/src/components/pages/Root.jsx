import {Navbar} from "../header/Navbar";
import {Outlet} from "react-router-dom";

export function Root() {
    return <>
        <Navbar/>
        <Outlet/>

    </>
}