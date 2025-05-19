import './index.css';

export const Instructor = (props) => {
  return (
    <section className="workshop-instructor">
      <h2 className="workshop-jmeno">{props.jmeno}</h2>
      <p className="workshop-profession">{props.profession}</p>
      <p className="workshop-email">{props.email}</p>
      <p className="workshop-bio">{props.bio}</p>
    </section>
  );
};