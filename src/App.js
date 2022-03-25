import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [animals, setAnimals] = useState([]);
  console.log(animals);
  useEffect(() => {
    fetch('animal.json')
    .then(res => res.json())
    .then(data => setAnimals(data))
  }, [])
  return (
    <div className="App">
      <Header/>
      {
        animals.map(animal => <h1 key={animal.id}>{animal.name}</h1>)
      }
    </div>
  );
}

export default App;
