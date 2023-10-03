import {menuItems} from "../../datas/menu-datas";
import {NavbarSubItems} from "./NavbarSubItems";

export function NavbarSubItemsContainer(menuItem) {

    const subItems = []

    for (menuItem of menuItems) {
        if (menuItem.children) {
            for (let childItem of menuItem.children.sort((childItem1, childItem2) => {
                if (childItem1 > childItem2) return 1
                if (childItem1 < childItem2) return -1
                return 0
            })) {
                subItems.push(<NavbarSubItems key={childItem.id} name={childItem.name} order={childItem.order}/>)
            }
            return <ul className="dropdown-menu" aria-labelledby="dropdown02">
                {subItems}
            </ul>
        }
    }
}

