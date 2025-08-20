import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {createClient} from "@supabase/supabase-js";
import {useNavigate} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} from 'react-router-dom';

const supabaseUrl="https://giydnknndvmyznfrwgeb.supabase.co"
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpeWRua25uZHZteXpuZnJ3Z2ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNTIyMDQsImV4cCI6MjA2OTkyODIwNH0.0OsZXLH0Eawyfc37Ip8zruPUht8PL0EKSwP3xDokGX0"
const supabase = createClient(supabaseUrl, supabaseKey);


function PrivateSession(){
  const hasSession = !!localStorage.getItem('supaSession');
  return hasSession ? <Outlet /> : <Navigate to="/login" replace />
}
 function Auth(){ //aqui é java script
  const hasSession = !!localStorage.getItem('supaSession');
  const nav = useNavigate();

  const [Msg, setMsg] = useState("");

  const [login, setlogin] = useState(true);
  const [user, setuser] = useState({
    name:"",
    email:"",
    password: "",
    phone:""
  })

  const [loading, Setloading] = useState(false)

  async function register(){

    Setloading(true);
    console.log(user)
      try{
      let { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password
      })

      if(error) throw error

      if(data.status == 400) throw data.message
      setMsg("Cadastro Realizado!");
    }catch(e){
      setMsg(`Erro: ${e.message}`); 
      }

      Setloading(false);
      setTimeout(() => setMsg("") , 5000);
    }

    async function logar() {
      Setloading(true)

      try{
      let { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password
      })

      if(error) throw error

      setMsg("logado");
      setTimeout(
      nav('/home',{replace: true}), 5002
    ) 

    }catch(err){
      setMsg(`error:` + err)
    }

      Setloading(false)
    }
  
  return ( /* aqui é html */
  <main ClassName= "App">
    
     
      <div className= "login-box"> 

      {login && (
        <form>
          <h1>Login</h1>

            <p>E-mail:</p>
          <input placeholder="Digite o e-mail do cadastro:" onChange = {(e) => setuser({...user, email: e.target.value})} />
            <p>Senha:</p>
          <input type="password" placeholder="Digite sua senha:" onChange = {(e) => setuser({...user, password: e.target.value})}/>
          
          <br/><br/>
          
          <button className="btn" onClick={logar} disabled={loading}>
            {Setloading ? "Entrar" : "Entrando..."}
            </button>

        </form>
      )}
      {!login && (
        <form>
          <h2>Cadastro:</h2>

          <p>Nome completo:</p>
          <input placeholder='Digite seu nome completo...' onchange = {(e) => ({...user, name: e.target.value})}/>
            
            <p>Senha:</p>
          <input type="password" placeholder='escolha sua senha...' onChange = {(e) => setuser({...user, password: e.target.value})}/>
            
            <p>E-mail</p>
          <input placeholder='digite o email para cadastro...' onChange = {(e) => setuser({...user, email: e.target.value})}/>
            
            <p>Telefone:</p>
          <input placeholder='digite um telefone valido...' onChange = {(e) => setuser({...user, phone: e.target.value})}/>

          <br/>
            <button className="btn" onClick={register} disabled={loading}>
            {Setloading ? "Cadastrar" : "cadastrando..."}
            </button>

        </form>
      
      )} <br/>
        <div className="displaybutton">
          <button className ="btn" onClick= {() => setlogin(!login)}>
          {login && ("Cadastrar-se")}
          {!login && ("Ir para o login")}
          </button>
        </div>


      </div>
    {Msg && (<div className= "toast">{Msg}</div>)}

  </main>
  );   
}

export default Auth;
