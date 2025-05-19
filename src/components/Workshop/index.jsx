import { WorkshopIntro } from './WorkshopIntro';
import {Venue} from './Venue';
import { Instructor } from './Instructor';

export const Workshop = (props) => {
    return(
        <>
            <WorkshopIntro title="Úvod do komponentového myšlení"
            description="Jak při vývoji software využívat komponenty pro zpřehlednění kódu a snadnější znovupoužitelnost."/>
            <Venue name="IT-Bootcamp"
            city="Praha"
            street="Polovidičové náměstí 837/11"/>
            <Instructor jmeno="Marie Pokorná-Těšitelová"
            profession="Senior full-stack vývojářka"
            email="marie.pokorna@it-bootcamp.cz"
            bio="Marie je zkušená lektorka, která se věnuje výuce programování již od svých 21 let. Její oblíbené technologie jsou React a Node.js. V současné době pracuje jako vývojářka v jedné z největších českých softwarových firem."/>
        </>
    )
}