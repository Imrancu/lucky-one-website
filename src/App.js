import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

function App() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch('animal.json')
    .then(res => res.json())
    .then(data => setAnimals(data))
  }, [])
  return (
    <div className="App">
      <Header/>
      {
        animals.map(animal => <Card key={animal.id} animal={animal}/>)
      }
    </div>
  );
}

export default App;
