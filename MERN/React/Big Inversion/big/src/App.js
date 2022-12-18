import logo from './logo.svg';
import './App.css';
import Negan from './components/Negan';


function App() {
  return (
    <div className="App">
    <Negan firstName = {"Rad"} lastName = {"tome"} age= {24} hairColor= {"black"} />
    <Negan firstName = {"ahmad"} lastName = {"tome"} age= {33} hairColor= {"White"} />
    <Negan firstName = {"thapet"} lastName = {"tome"} age= {14} hairColor= {"Red"} />
    <Negan firstName = {"khaled"} lastName = {"Ammar"} age= {24} hairColor= {"Yellow"} />
    </div>
  );
}

export default App;
