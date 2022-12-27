import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Form from './comp/Form';
import {Router} from '@reach/router';
import DeleteButton from './comp/DeleteButton';
import Home from './comp/Home';
import Status from './views/Status';
import Details from './comp/Details';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
     <Router>
     <Home path="/players/list"/>
      <Main path = "/players/list/new"/>
      <Status path="/sts/game/:num"/>
      <Details path ="/details/:id"/>
      <Update path="/update/:id"/>
     </Router>
    </div>
  );
}

export default App;
