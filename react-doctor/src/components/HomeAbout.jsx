import {useState} from "react";

export function HomeAbout() {

    const [photos, setPhotos] = useState(true)

    function handlePhotos() {
        photos ? setPhotos(false) : setPhotos(true)
    }

    return <>
        <section className="section about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div onClick={handlePhotos} className="about-img">
                            {photos && <><img src="/novena/images/about/img-1.jpg" alt="" className="img-fluid"/>
                                <img src="/novena//images/about/img-2.jpg" alt="" className="img-fluid mt-4"/></>}
                            {!photos && <><img src="/novena/images/about/img-2.jpg" alt="" className="img-fluid"/>
                                <img src="/novena//images/about/img-1.jpg" alt="" className="img-fluid mt-4"/></>}

                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="about-img mt-4 mt-lg-0">
                            <img src="/novena/images/about/img-3.jpg" alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-content pl-4 mt-4 mt-lg-0">
                            <h2 className="title-color">Personal care <br/>&amp; healthy living</h2>
                            <p className="mt-4 mb-5">We provide best leading medicle service Nulla perferendis veniam
                                deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>

                            <a href="service.html" className="btn btn-main-2 btn-round-full btn-icon">Services<i
                                className="icofont-simple-right ml-3"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}