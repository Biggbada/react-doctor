import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ejcepws', 'template_xiv62ks', form.current, 'zenfkgMGV-PfC2A69')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="row">
                <div className="col-12">
                    {/*<div className="alert alert-success contact__msg" style="display: none" role="alert">*/}
                    {/*    Your message was sent successfully.*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="name" id="name" type="text" className="form-control"
                               placeholder="Your Full Name"/>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="email" id="email" type="email" className="form-control"
                               placeholder="Your Email Address"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="subject" id="subject" type="text" className="form-control"
                               placeholder="Your Query Topic"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="phone" id="phone" type="text" className="form-control"
                               placeholder="Your Phone Number"/>
                    </div>
                </div>
            </div>

            <div className="form-group-2 mb-4">
                <textarea name="message" id="message" className="form-control" rows="8"
                          placeholder="Your Message"></textarea>
            </div>

            <div className="text-center">
                <input className="btn btn-main btn-round-full" name="submit" type="submit" value="Send Messege"/>
            </div>
        </form>
    );
};


export function ContactForm() {
    const ContactUs = () => {
        const form = document.querySelector('#contact-form').useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_ejcepws', 'template_xiv62ks', form.current)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        };


        return <div className="col-lg-12 col-md-12 col-sm-12">
            <form id="contact-form" className="contact__form " ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-12">
                        {/*<div className="alert alert-success contact__msg" style="display: none" role="alert">*/}
                        {/*    Your message was sent successfully.*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input name="name" id="name" type="text" className="form-control"
                                   placeholder="Your Full Name"/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <input name="email" id="email" type="email" className="form-control"
                                   placeholder="Your Email Address"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input name="subject" id="subject" type="text" className="form-control"
                                   placeholder="Your Query Topic"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input name="phone" id="phone" type="text" className="form-control"
                                   placeholder="Your Phone Number"/>
                        </div>
                    </div>
                </div>

                <div className="form-group-2 mb-4">
                <textarea name="message" id="message" className="form-control" rows="8"
                          placeholder="Your Message"></textarea>
                </div>

                <div className="text-center">
                    <input className="btn btn-main btn-round-full" name="submit" type="submit" value="Send Messege"/>
                </div>
            </form>
        </div>
    }
}