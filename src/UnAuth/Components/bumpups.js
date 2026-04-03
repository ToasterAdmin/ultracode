import "./bumpups.css";

function Bumpups() {
  const items = [
    { title: "Cuts & fades", text: "Classic and modern styles tailored to you." },
    { title: "Beard & shave", text: "Hot towel and detail work when you want it." },
    { title: "Easy booking", text: "Reserve a chair in a few taps." },
  ];

  return (
    <section className="bumpups" aria-label="Highlights">
      <ul className="bumpups__list">
        {items.map((item) => (
          <li key={item.title} className="bumpups__item">
            <h2 className="bumpups__title">{item.title}</h2>
            <p className="bumpups__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Bumpups;
