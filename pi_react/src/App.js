import './App.css';

import Auth from './Auth'
import Home from './Home'


import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} 
  from 'react-router-dom';

function PrivateSession(){
  const hasSession = !!localStorage.getItem('supaSession');
  return hasSession ? <Outlet /> : <Navigate to="/login" replace />
}

function App() {
  const hasSession = !!localStorage.getItem('supaSession');

  return (
    <Router>
      <main className="App">
        <nav>
          {hasSession ? (
            <>
              <Link to="/home">Inicio</Link>
             {/* <Link to="/users">Usuários</Link>
              <Link to="/game">Jogos</Link>*/}
            </>
          ):(
            <>
              {/*<Link to="/home">Inicio</Link>*/}
              <Link to="/login">Entrar</Link>
            </>
          )}
        </nav>

        <Routes>
          {/* Rotas Públicas */}
          <Route path='/login' element={<Auth />} />

          <Route path='/home' element={<Home />} />
          {/*<Route path='/game' element={<Game />} />

          <Route element={ <PrivateSession/> }>
            {/* Rotas Logado 
            <Route path='/users' element={<User />} />
            
            
            
          </Route>*/}

          <Route path='/' element={<Navigate to='/login' replace/>} />
        </Routes>

      </main>
    </Router>
  );
}

export default App;