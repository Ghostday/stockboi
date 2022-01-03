import logo from './logo.svg';
import './App.css';
import StockList from './Components/StockList'

function App() {
  

  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <StockList/>
    </div>
  );
}

export default App;

