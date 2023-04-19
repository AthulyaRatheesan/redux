import logo from './logo.svg';
import './App.css';
import Home, { Counter } from './Home';
import Sample from './Sample';
import Sample1 from './Sample1';
import String from './String';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Sample/>
      <Sample1/>
      <String/>
    </div>
  );
}

export default App;
