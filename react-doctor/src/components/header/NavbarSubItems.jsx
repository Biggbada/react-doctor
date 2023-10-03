export function NavbarSubItems({item}) {
    return  <li>
        <a className="dropdown-item" href={item.linkToUrl}>{item.name}</a>
    </li>
}