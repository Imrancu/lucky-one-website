import './App.css';
import Answers from './components/Answers/Answers';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Shop/>
      <Answers/>
    </div>
  );
}

export default App;
