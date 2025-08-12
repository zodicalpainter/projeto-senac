import logo from './logo.svg';
import './App.css';

function App() {

  let numerico = [0,1,2,3,4,5,6,7,8,9,10]

  let impares = [];



  for(let i=0; i<11; i++ ){
    if(numerico[i] % 2 != 0){
      impares.push(<p>{numerico[i]}</p>)
    }
  }
  return (
    <main className="App">
      {impares}
    </main>
  );
}

export default App;
