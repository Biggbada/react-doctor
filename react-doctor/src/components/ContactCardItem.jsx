export function ContactCardItem({contact}) {
    return <div className="col-lg-4 col-sm-6 col-md-6">
        <div className="contact-block mb-4 mb-lg-0">
            <i className="icofont-live-support"></i>
            <h5>{contact.title}</h5>
            {contact.text}
        </div>
    </div>
}