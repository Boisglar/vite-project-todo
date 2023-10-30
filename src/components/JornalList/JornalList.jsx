import CardButton from '../CardButton/CardButton';
import JornalItem from '../JornalItem/JornalItem';
import './JornalList.css';

export default function JornalList({ items }) {
  const sortItems = (a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  };
  if (items.length === 0) {
    return <p>Записей нет</p>;
  }

  return (
    <div className="jornal-list">
      {items.sort(sortItems).map((el) => (
        <CardButton key={el.id}>
          <JornalItem title={el.title} text={el.post} date={el.date} />
        </CardButton>
      ))}
    </div>
  );
}
