import { WorkshopIntro } from './WorkshopIntro';
import {Venue} from './Venue';
import { Instructor } from './Instructor';

const response = await fetch ('http://localhost:4000/api/workshops/0')
const data = await response.json();

export const Workshop = (props) => {
    return(
        <>
            <WorkshopIntro title={data.data.title} 
            description={data.data.description}/>
            <Venue name={data.data.venue.name}
            city={data.data.venue.city}
            street={data.data.venue.street}/>
            <Instructor instructor={data.data.instructor.name} 
            profession={data.data.instructor.profession}
            email={data.data.instructor.email}
            bio={data.data.instructor.bio}/>
        </>
    )
}