  import logo from './logo.svg';
  import './App.css';
  import {useState, useEffect} from 'react';
  import {createClient} from "@supabase/supabase-js";
  import {useNavigate} from 'react-router-dom';
  import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} from 'react-router-dom';

  const supabaseUrl = "https://giydnknndvmyznfrwgeb.supabase.co";
  const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpeWRua25uZHZteXpuZnJ3Z2ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNTIyMDQsImV4cCI6MjA2OTkyODIwNH0.0OsZXLH0Eawyfc37Ip8zruPUht8PL0EKSwP3xDokGX0"
  const supabase = createClient(supabaseUrl, supabaseKey);
    
  function Home(){ //aqui é java script
    const nav = useNavigate();
    const [user, setUser] = useState({
      name:"",
      cpf:"",
      telfixo:"",
      telmovel:"",
      endereco:"",
      tipo:""
    })

    const[ dados, setDados] = useState([])

    useEffect(()=>{
      lerdados()
    }, []) 

    async function salvarUser(){
      const { data: userData, error } = await supabase.auth.getUser();
      const uid = userData?.user?.id;
      
      if (!uid) {
        return nav("/login", { replace: true });
      }
      
      const { data, error: insertError } = await supabase
        .from('users')
        .insert([{ ...user, auth_id: uid }]);
      //.select()
    }


    async function lerdados(filtro){
      if(filtro){
      let { data: datausers, error } = await supabase
        .from('users')
        .select('*')
        .eq('telfixo',filtro);

      setDados(datausers);
    }else{
      let { data: datausers, error } = await supabase
        .from('users')
        .select('*')
        
      setDados(datausers);
    }
  }

    return ( /* aqui é html */
    <div ClassName= "screen">
      <h1>Cadastro candidato</h1>
      <form onSubmit={(e) => {
  e.preventDefault();
}}>
      <input type="text" placeholder="digite seu nome" onChange={(e) => setUser({...user, name: e.target.value})} />
      <input type="text" placeholder="digite CPF" onChange={(e) => setUser({...user, cpf: e.target.value})} />
      <input type="text" placeholder="Tel Fixo" onChange={(e) => setUser({...user, telfixo: e.target.value})} />
      <input type="text" placeholder="Tel Movel" onChange={(e) => setUser({...user, telmovel: e.target.value})} />
      <input type="text" placeholder="Endereço" onChange={(e) => setUser({...user, endereco: e.target.value})} />
      <input type="text" placeholder="Tipo" onChange={(e) => setUser({...user, tipo: e.target.value})} />

          <button onClick={salvarUser}>Salvar</button>
      </form>

    <button onClick={() => lerdados("telfixo")}>Ver telfixo</button>
    <button onClick={() => lerdados("telmovel")}>Ver telmovel</button>
    <button onClick={() => lerdados()}>limpar filtro</button>


    {dados.map(
      d =>(
        <div key={d.id}>
        <br/><br/>
        {d.name}<br/>
        {d.cpf}<br/>
        {d.telfixo}

        </div>
      )
    )}
    </div>
    );   
  }
export default Home;
