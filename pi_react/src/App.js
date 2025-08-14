import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() { //aqui é java script


  const [user, setuser] = useState({
    email:"",
    senha:"",
    phone: "",
    name:""
  });

  const [Islogin, setIslogin] = useState (true);

  function salvar(){
    alert("email: " + user.email + "Senha: " + user.senha)
  }

  return ( /* aqui é html */
    <main ClassName= "App">

        <button onClick= {() => setIslogin(!Islogin)}>
        {Islogin && ("Cadastrar-se")}
        {!Islogin && ("Voltar para login")}
        </button>

      {!Islogin && (
      <form className="register">
        
      </form>
      )}

        {Islogin && (
        <form className="login">
          <p>E-mail:</p>
          <input type="email" placeholder="Digite seu e-mail" onChange={(e) => setuser({...user, email: e.target.value})}/>
          <p>Senha:</p>
          <input type="password" placeholder="digite sua senha" onChange={(e) => setuser({...user, senha: e.target.value})}/>
           <br/><br/>
              <button className="btn" id="salvar" onClick={() => salvar()}>Salvar</button>
        </form>
        )}


    </main>
  );   
}

export default App;
