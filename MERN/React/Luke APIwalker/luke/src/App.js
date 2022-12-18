import logo from './logo.svg';
import './comp/App.css';
import Home from './comp/Home';
import People from './comp/People';
import Planets from './comp/Planets';
import Eroor from './comp/Eroor';
import { Router } from '@reach/router' ;


function App() {
  return (
    <div className="App">
      <Home/>
      <Router>
      <People path="people/:id"/>
      <Planets path="planets/:pLiD"/>
      <Eroor path="/error"/>
      </Router>
    </div>
  );
}

export default App;
