import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import Form from './comp/Form';
import {Router} from '@reach/router';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
     <Router>
     <Main path="/"/>
     <Details path="details/:id"/>
     <Update path="edit/:id"/>
     </Router>
    </div>
  );
}

export default App;
