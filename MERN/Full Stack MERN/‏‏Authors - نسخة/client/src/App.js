import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Form from './comp/Form';
import {Router} from '@reach/router';
import Update from './views/Update';
import DeleteButton from './comp/DeleteButton';
import Home from './comp/Home';


function App() {
  return (
    <div className="App">
     <Router>
     <Home path="/"/>
      <Main path = "/new"/>
     <Update path="edit/:id"/>
     </Router>
    </div>
  );
}

export default App;
