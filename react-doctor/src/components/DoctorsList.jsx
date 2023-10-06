import {doctors} from "../datas/doctors";
import {useState} from "react";


export function DoctorsList() {

    const [selectedSpeciality, setSelectedSpeciality] = useState('')

    const filtersHandler = (event) => {
        event.preventDefault()
        let filter = '';
        switch (event.target.value) {
            case 'all':
                filter = '';
                break
            case 'cat1':
                filter = 'Cardiology';
                break;
            case 'cat2':
                filter = 'Dental';
                break;
            case 'cat3':
                filter = 'Neurology';
                break;
            case 'cat4':
                filter = 'Medicine';
                break;
            case 'cat5':
                filter = 'Pediatry';
                break;
            case 'cat6':
                filter = 'Traumatology';
                break;
        }
        console.log(filter)
        setSelectedSpeciality(filter)
    }
    const doctorsFiltered = doctors.filter((doctor) =>
        selectedSpeciality ?
            doctor.specialities.includes(selectedSpeciality)
            :
            true
    )


    const doctorsDisplay = doctorsFiltered.map((doctor) => {
        return (
            <div key={doctor.id} className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item shuffle-item--visible"
                 data-groups="[&quot;cat3&quot;]"
                // style="position: absolute; top: 0px; left: 0px; visibility: visible; will-change: transform; opacity: 1; transform: translate(570px, 0px) scale(1); transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-property: transform, opacity;"
            >
                <div className="position-relative doctor-inner-box">
                    <div className="doctor-profile">
                        <div className="doctor-img">
                            <img src={doctor.picture} alt={doctor.name} className="img-fluid w-100"/>
                        </div>
                    </div>
                    <div className="content mt-3">
                        <h4 className="mb-0"><a href="doctor-single.html">{doctor.name}</a></h4>
                        <p>{doctor.specialities}</p>
                    </div>
                </div>
            </div>);
    })

    return <>
        <div className="col-12 text-center  mb-5">
            <div className="btn-group btn-group-toggle " data-toggle="buttons">
                <label className={`btn${!selectedSpeciality ? ' active' : ''}`}>
                    <input onClick={filtersHandler} type="radio" name="shuffle-filter" value="all"/>All
                    Department
                </label>
                <label className={`btn${selectedSpeciality === 'cat1' ? ' active' : ''}`}>
                    <input onClick={filtersHandler} type="radio" name="shuffle-filter" value="cat1"/>Cardiology
                </label>
                <label className={`btn${selectedSpeciality === 'cat2' ? ' active' : ''}`}>
                    <input onClick={filtersHandler} type="radio" name="shuffle-filter" value="cat2"/>Dental
                </label>
                <label className={`btn${selectedSpeciality === 'cat3' ? ' active' : ''}`}>
                    <input onClick={filtersHandler} type="radio" name="shuffle-filter" value="cat3"/>Neurology
                </label>
                <label className={`btn${selectedSpeciality === 'cat4' ? ' active' : ''}`}>
                    <input onClick={filtersHandler} type="radio" name="shuffle-filter" value="cat4"/>Medicine
                </label>
                <label className={`btn${selectedSpeciality === 'cat5' ? ' active' : ''}`}>
                    <input onClick={filtersHandler} type="radio" name="shuffle-filter" value="cat5"/>Pediatric
                </label>
                <label className={`btn${selectedSpeciality === 'cat6' ? ' active' : ''}`}>
                    <input onClick={filtersHandler} type="radio" name="shuffle-filter" value="cat6"/>Traumatology
                </label>
            </div>
        </div>
        <div className="row shuffle-wrapper portfolio-gallery shuffle"
            // style="position: relative; overflow: hidden; height: 1113px; transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;"
        >
            {doctorsDisplay}
        </div>
    </>
}