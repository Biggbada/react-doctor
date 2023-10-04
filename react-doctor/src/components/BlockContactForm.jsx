import {ContactUs} from "./ContactForm";

export function BlockContactForm() {
    return <section className="contact-form-wrap section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center">
                        <h2 className="text-md mb-2">Contact us</h2>
                        <div className="divider mx-auto my-4"></div>
                        <p className="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique,
                            excepturi mollitia sit perferendis maiores ratione aliquam?</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ContactUs/>
                </div>
            </div>
        </div>
    </section>
}