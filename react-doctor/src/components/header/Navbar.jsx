import {NavbarItem} from "./NavbarItem";
import {menuItems} from "../../datas/menu-datas";
import {Link} from "react-router-dom";


export function Navbar() {


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
            <li className="navbar-brand">
                <Link to={'/'}>
                    <img src='/novena/images/logo.png' alt="" className="img-fluid"></img>
                </Link>
            </li>

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