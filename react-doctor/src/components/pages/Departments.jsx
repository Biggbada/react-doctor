import {departmentsDatas} from "../../datas/departments-datas";
import {Link} from "react-router-dom";

const department = departmentsDatas.map((department) => {
        return <div className="col-lg-4 col-md-6 ">
            <div className="department-block mb-5">
                <img src={department.picture} alt={department.name} className="img-fluid w-100"/>
                <div className="content">
                    <h4 className="mt-4 mb-2 title-color">{department.name}</h4>
                    <p className="mb-4">{department.excerpt}</p>
                    <Link to={`${department.id}`} className="read-more">Learn More<i
                        className="icofont-simple-right ml-2"></i></Link>
                </div>
            </div>
        </div>
    }
)


export function Departments() {
    return <section className="section service-2">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                    <div className="section-title">
                        <h2>Award winning patient care</h2>
                        <div className="divider mx-auto my-4"></div>
                        <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt
                            molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {department}
            </div>
        </div>
    </section>
}