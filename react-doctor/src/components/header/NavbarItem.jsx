import {NavbarSubItems} from "./NavbarSubItems";

export function NavbarItem({item}) {
    return <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"
           href={item.linkToUrl}
           id={item.id}
           data-toggle="dropdown"
           aria-haspopup="true"
           aria-expanded="false">
            {item.name}
            <i className="icofont-thin-down"></i>
        </a>
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