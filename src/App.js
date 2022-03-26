import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  /* const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch('animal.json')
    .then(res => res.json())
    .then(data => setAnimals(data))
  }, []) */
  return (
    <div className="App">
      <Header/>
      <Shop/>
    </div>
  );
}

export default App;
