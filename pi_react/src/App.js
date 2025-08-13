import logo from './logo.svg';
import './App.css';

function App() { //aqui é java script

  let email = ""
  let senha = ""

  function mudaemail (valor){
    email = valor

  }
  function mudasenha(valor){
 senha = valor
  }

  function salvar(){
    alert("email: " + email + "Senha: " + senha)
  }


let Islogin = true;

  return ( /* aqui é html */
    <main ClassName= "App">

        <button onClick= {()=>(Islogin = !Islogin)}>
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
          <input type="email" placeholder="Digite seu e-mail" onChange={(e) => mudaemail(e.target.value)}/>
          <p>Senha:</p>
          <input type="password" placeholder="digite sua senha" onChange={(e) => mudasenha(e.target.value) }/>
           <br/><br/>
              <button className="btn" id="salvar" onClick={() => salvar()}>Salvar</button>
        </form>
        )}


    </main>
  );   
}

export default App;
