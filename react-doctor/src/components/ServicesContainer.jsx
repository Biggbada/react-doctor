import {ServiceItem} from "./ServiceItem";

export function ServicesContainer() {

    const services = [
        {id: 1, title: "Child care", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images/service/service-1.jpg"},
        {id: 2, title: "Personal Care", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images//service/service-2.jpg"},
        {id: 3, title: "CT scan", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images/service/service-3.jpg"},
        {id: 4, title: "Joint replacement", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images/service/service-4.jpg"},
        {id: 5, title: "Examination & Diagnosis", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images/service/service-6.jpg"},
        {id: 6, title: "Alzheimer's disease", subtitle: "Saepe nulla praesentium eaque omnis perferendis a doloremque.", picture: "/novena/images/service/service-8.jpg"},
    ]
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