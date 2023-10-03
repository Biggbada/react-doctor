import {FooterItemNovena} from "./FooterItemNovena";
import {FooterItemDepartment} from "./FooterItemDepartment";
import {FooterItemSupport} from "./FooterItemSupport";
import {FooterItemGetInTouch} from "./FooterItemGetInTouch";

export function FooterFirstContainer() {
    return <div className="row">
        <FooterItemNovena />
        <FooterItemDepartment />
        <FooterItemSupport />
        <FooterItemGetInTouch />
    </div>
}