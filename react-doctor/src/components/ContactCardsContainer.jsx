import {contacts} from "../datas/contact-items";
import {ContactCardItem} from "./ContactCardItem";

export function ContactCardsContainer() {

    let contactItems = [];
    contacts.forEach((contact => {
        contactItems.push(<ContactCardItem contact={contact} key={contact.id}/>)
    }))


    return <section className="section contact-info pb-0">
        <div className="container">
            <div className="row">
                {contactItems}
            </div>
        </div>
    </section>
}