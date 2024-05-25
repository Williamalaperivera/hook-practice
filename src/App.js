import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './Components/MyFirstComponent';
import MySecondComponent from './Components/MySecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MySecondComponent/>
        <div>
        <hr />
        <MyFirstComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;
