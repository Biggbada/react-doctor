import {DoctorsAbout} from "./DoctorsAbout";
import {DoctorsList} from "./DoctorsList";

export function DoctorsContainer() {
    return <section className="section doctors">
        <div className="container">
            <DoctorsAbout/>
            <DoctorsList/>
        </div>
    </section>
}