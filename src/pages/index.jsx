import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch ('http://localhost:4000/api/workshops/0')
const data = await response.json();

document.querySelector('#root').innerHTML = render(
  <><p>Název kurzu: {data.data.title}</p>
  <p>Jméno instruktora: {data.data.instructor.name}</p>
  <p>Místo konání: {data.data.venue.street}, {data.data.venue.city}</p>
  </>
);
