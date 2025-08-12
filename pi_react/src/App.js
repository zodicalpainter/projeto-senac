import logo from './logo.svg';
import './App.css';

function App() {

  let cesta = ['macarrao', 'queijo','salsicha', 'molho de tomate']
  let desenha = [];

/*

  function calculadora (a, b , op){
     calculadora basica
     if(op == '+'){
      return a + b
    }
    else if (op == '-'){
      return a - b;
    }else if (op == '*'){
      return a * b
    }else if (op == '/'){
      return a / b
    } 

  
    switch(op){
      case '+':
        return a + b
      case '-':
        return a + b
      case '*':
        return a + b
      case '/':
        return a + b
    }
  }
    */
  for(let i=0; i<3; i++ ){
    desenha.push(<p> {cesta[i]} </p>)         
  }


  return (
    <main className="App">
      {desenha}
    </main>
  );
}

export default App;
