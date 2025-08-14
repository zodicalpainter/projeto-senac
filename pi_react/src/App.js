import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() { //aqui é java script

  const [login, setlogin] = useState(true);
  const [user, setuser] = useState({
    email:"",
    senha:""
  })

  const[cadastro, setcadastro] = useState({
    name:"",
    email:"",
    password: "",
    phone:""
  })

  return ( /* aqui é html */
    <main ClassName= "App">
      
     
      <div className= "login-box"> 

      {login && (
        <form>
          <h1>Login</h1>

            <p>E-mail:</p>
          <input placeholder="Digite o e-mail do cadastro:" onchange = {(e) => setuser({...user, email: e.target.value})} />
            <p>Senha:</p>
          <input placeholder="Digite sua senha:" onchange = {(e) => setuser({...user, senha: e.target.value})}/>
          <br/><br/>
          <button className="btn">Entrar</button>
        </form>
      )}
      {!login && (
        <form>
          <h2>Cadastro:</h2>

          <p>Nome completo:</p>
         
          <input placeholder='Digite seu nome completo...' onchange = {(e) => setcadastro({...cadastro, name: e.target.value})}/>
            <p>Senha:</p>
          <input placeholder='escolha sua senha...'onchange = {(e) => setcadastro({...cadastro, password: e.target.value})}/>
            <p>E-mail</p>
          <input placeholder='digite o email para cadastro...'onchange = {(e) => setcadastro({...cadastro, email: e.target.value})}/>
            <p>Telefone:</p>
          <input placeholder='digite um telefone valido...'onchange = {(e) => setcadastro({...cadastro, phone: e.target.value})}/>

          <br/><br/><button className="btn">Cadastrar</button>
        </form>
      
      )} <br/>
        <div className="displaybutton">
          <button className ="btn" onClick= {() => setlogin(!login)}>
          {login && ("Cadastrar-se")}
          {!login && ("Ir para o login")}
          </button>
        </div>


      </div>
    </main>
  );   
}

export default App;
