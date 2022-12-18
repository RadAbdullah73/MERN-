import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import HomeCom from './comp/HomeCom'
import Routing from './comp/Routing';
import Forth from './comp/Forth';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeCom path="/home"></HomeCom>
        <Routing path="/:num"></Routing>
        <Forth path="/:hello/:color1/:color2"></Forth>
      </Router>
      
    </div>
  );
}

export default App;
