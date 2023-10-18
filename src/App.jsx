import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';
import JornalItem from './components/JornalItem/JornalItem';
import JornalList from './components/JornalList/JornalList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';

function App() {
  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JornalAddButton />
        <JornalList>
          <CardButton>
            <JornalItem />
          </CardButton>
        </JornalList>
      </LeftPanel>
      <Body>body</Body>
    </div>
  );
}

export default App;
