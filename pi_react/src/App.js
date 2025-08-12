import logo from './logo.svg';
import './App.css';

function App() { //aqui é java script
  let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  let numeros=[] 

  // apenas os números impares
  for (let i = 0; i <lista.length; i++) {
    if (lista[i] % 2 !== 0) {
      numeros.push(lista[i]);
    }
  }
    



  return ( /* aqui é html */
    <main ClassName= "App">
    
      {numeros}
      
    </main>
  );   
}

export default App;
