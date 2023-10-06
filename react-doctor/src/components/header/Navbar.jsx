import {NavbarItem} from "./NavbarItem";
import {menuItems} from "../../datas/menu-datas";
import {useState} from "react";


export function Navbar() {
    const [picture, setPicture] = useState('/novena/images/logo.png')

    function pictureHandler() {
        setPicture('/novena/images/sticker-pin-up-et-tabouret-infirmiere-en-blouse-ve.webp')
    }

    const navItems = [];
    for (let item of menuItems.sort((item1, item2) => {
        if (item1.order > item2.order) return 1;
        if (item1.order < item2.order) return -1;
        return 0
    })) {
        console.log(item)
        navItems.push(<NavbarItem key={item.id} item={item}/>)
    }


    return <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
            <a className="navbar-brand" href="/index">
                <img onClick={pictureHandler} src={picture} alt="" className="img-fluid"></img>
            </a>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
                    aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icofont-navigation-menu"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarmain">
                <ul className="navbar-nav ml-auto">
                    {navItems}
                </ul>
            </div>
        </div>
    </nav>
}