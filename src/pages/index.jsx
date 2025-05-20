import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Workshop } from '../components/Workshop';

const response = await fetch ('http://localhost:4000/api/workshops/0')
const data = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {
      <Workshop/>
   }

  </div>
);
