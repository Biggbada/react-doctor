import {ServiceItem} from "./ServiceItem";
import {services} from "../datas/services-datas";

export function ServicesContainer() {


    const items = []
    for (let service of services) {

        items.push(<ServiceItem key={service.id} name={service.title} picture={service.picture} title = {service.title} subtitle={service.subtitle} />)
    }


    return <div className="section service-2">
        <div className="container">
            <div className="row">
                {items}
            </div>
        </div>
    </div>

}