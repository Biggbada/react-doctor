import {NavbarSubItems} from "./NavbarSubItems";

export function NavbarItem({item}) {
    if (item.children) {
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
            <ul className="dropdown-menu" aria-labelledby="dropdown02">
                {item.children.sort((child1, child2) => {
                    console.log(item.children)
                    if (child1.order > child2.order) return 1
                    if (child1.order < child2.order) return -1
                    return 0
                }).map(child => (
                    <NavbarSubItems key={child.id} item={child}/>
                ))}
                {/*{item.children.map(child => (*/}
                {/*    <NavbarSubItems key={child.id} item={child}/>*/}
                {/*))}*/}
            </ul>

        </li>
    } else {
        return <li className="nav-item">
            <a className="nav-link"
               href={item.linkToUrl}
               id={item.id}
               data-toggle=""
               aria-haspopup="true"
               aria-expanded="false">
                {item.name}
            </a>
        </li>
    }
}