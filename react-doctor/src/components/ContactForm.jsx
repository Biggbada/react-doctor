import React, {useRef, useState} from 'react';

export const ContactUs = () => {
    const form = useRef();
    let [test = 'bla', setTest] = useState();

    function handleTest() {
        const newValue = test + 'bla'
        setTest(newValue)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        //
        // emailjs.sendForm('service_ejcepws', 'template_xiv62ks', form.current, 'zenfkgMGV-PfC2A69')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };
    let test2 = useRef(12);

    let [counter, setCounter] = useState(0)
    const handleButtonClick = (event) => {
        event.preventDefault()
        // setCounter(counter + 1)
        setCounter(counter++)
        test2.current++
        console.log(test2.current)
        // console.log(textValue.current)
    };


    return (
        <>
            <p>{counter}</p>
            <form>
                <button onClick={handleButtonClick} type={"submit"}>Click</button>
            </form>
            <form>
                <input id={'test'} type="text"/>
            </form>
            <hr/>
            <form onClick={handleTest} onSubmit={sendEmail}>
                <p>{test}</p>
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
                            <input name="name" id="name" type="text"
                                   className="form-control"
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
        </>
    );
};


export function ContactForm() {
    const ContactUs = () => {
        const form = document.querySelector('#contact-form').useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            // emailjs.sendForm('service_ejcepws', 'template_xiv62ks', form.current)
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });
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