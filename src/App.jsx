import { useEffect, useState } from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';
import JornalItem from './components/JornalItem/JornalItem';
import JornalList from './components/JornalList/JornalList';
import JournalForm from './components/JournalForm/JournalForm';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    setData(data.map((item) => ({ ...item, date: new Date(item.date) })));
  }, []);

  const addItem = (item) => {
    setData((prev) => [
      ...prev,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: prev.length > 0 ? Math.max(...prev.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JornalAddButton />
        <JornalList items={data} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
