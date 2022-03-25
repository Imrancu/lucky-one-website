import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

function App() {
  const [animals, setAnimals] = useState([]);
  console.log(animals);
  useEffect(() => {
    fetch('animals.json')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
  return (
    <div className="App">
      <Header/>
      <Card/>
    </div>
  );
}

export default App;
