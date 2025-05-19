import './index.css';

export const Venue = (props) => {
  return (
    <section className="workshop-venue">
      <h2 className="workshop-name">{props.name}</h2>
      <p className="workshop-city">{props.city}</p>
      <p className="workshop-street">{props.street}</p>
    </section>
  );
};