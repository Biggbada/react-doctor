export function ServiceItem(service) {
    return <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-block mb-5">
            <img src={service.picture} alt="" className="img-fluid"/>
                <div className="content">
                    <h4 className="mt-4 mb-2 title-color">{service.title}</h4>
                    <p className="mb-4">{service.subtitle}</p>
                </div>
        </div>
    </div>

    }