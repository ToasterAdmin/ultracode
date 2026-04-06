import "./TimeStamp.css";

function TimeStamp() {
  const formatted = new Date().toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <p className="time-stamp" role="status">
      <span className="time-stamp__label">Local time</span>
      <time className="time-stamp__value" dateTime={new Date().toISOString()}>
        {formatted}
      </time>
    </p>
  );
}

export default TimeStamp;
