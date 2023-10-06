import {ServicesContainer} from "../ServicesContainer";
import {HeroCallToAction} from "../HeroCallToAction";
import {HeroHeader} from "../HeroHeader";

export function ServicesPage() {
    return <>

        <HeroHeader title="Our services" text="What We Do"/>
        <ServicesContainer/>
        <HeroCallToAction/>
    </>

}