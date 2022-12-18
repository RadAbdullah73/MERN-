import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
     <Tabs listOfTabs={[
      {name:"Tab1",content:" Welcome ,This is Tab1"},
      {name:"Tab2",content:" Hellooooooo ,This is Tab2"},
      {name:"Tab3",content:"Buyyyyyyyyy , This is Tab3"}
     ]}/>
    </div>
  );
}

export default App;
