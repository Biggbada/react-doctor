import {Link} from "react-router-dom";

export function NavbarSubItems({item}) {
    return <li>
        <Link to={item.linkToUrl} l className="dropdown-item">
            {item.name}
        </Link>
    </li>
}