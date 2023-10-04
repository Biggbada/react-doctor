import {HeroCallToAction} from "../HeroCallToAction";
import {ContactCardsContainer} from "../ContactCardsContainer";
import {BlockContactForm} from "../BlockContactForm";
import {HeroHeader} from "../HeroHeader";

export function Contact() {
    return <div>
        <HeroHeader title="Contact" text="Get In Touch"/>
        <ContactCardsContainer/>
        <BlockContactForm/>
        <HeroCallToAction/>
    </div>
}