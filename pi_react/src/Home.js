import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {createClient} from "@supabase/supabase-js";
import {useNavigate} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} from 'react-router-dom';

const supabaseUrl="https://giydnknndvmyznfrwgeb.supabase.co"
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpeWRua25uZHZteXpuZnJ3Z2ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNTIyMDQsImV4cCI6MjA2OTkyODIwNH0.0OsZXLH0Eawyfc37Ip8zruPUht8PL0EKSwP3xDokGX0"
const supabase = createClient(supabaseUrl, supabaseKey);


 function Home(){ //aqui é java script
  
  
  return ( /* aqui é html */
  <main ClassName= "App">
    
     
  </main>
  );   
}

export default Home;
