import './index.css';

export const WorkshopIntro = (props) => {
  return (
    <section className="workshop-intro">
      <h2 className="workshop-title">{props.title}</h2>
      <p className="workshop-description">{props.description}</p>
    </section>
  );
};