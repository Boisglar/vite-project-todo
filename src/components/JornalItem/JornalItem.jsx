import './JornalItem.css';
export default function JornalItem({ title, text, date }) {
  const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

  return (
    <div className="jornal-item">
      <h2 className="jornal-item__header">{title}</h2>
      <h2 className="jornal-item___body">
        <div className="jornal-item__date">{formatedDate}</div>
        <div className="jornal-item__text">{text}</div>
      </h2>
    </div>
  );
}
