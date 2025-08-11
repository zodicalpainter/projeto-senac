import logo from './logo.svg';
import './App.css';

function App() {
  let oi = "ola mundo";
  oi+="Marcius;"
  function soma (a, b){ // parametros
    return a + b 
  }

  return (
    <main className="App">
      
    {
      (soma (oi, "Marcius"))
    }
      
    </main>
  );
}

export default App;
