import {NavbarSubItems} from "./NavbarSubItems";
import {NavLink} from "react-router-dom";

export function NavbarItem({item}) {
    return <li className="nav-item dropdown">
        <NavLink to={item.linkToUrl}
                 className={({isActive}) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}
                 id={item.id}
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false"
        >
            {item.name}
            {item.children && <i className="icofont-thin-down"></i>
            }
        </NavLink>

        {item.children &&
            <ul className="dropdown-menu" aria-labelledby="dropdown02">
                {item.children.sort((child1, child2) => {
                    if (child1.order > child2.order) return 1
                    if (child1.order < child2.order) return -1
                    return 0
                }).map(child => (
                    <NavbarSubItems key={child.id} item={child}/>
                ))}
            </ul>
        }
    </li>
}