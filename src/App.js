import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

import Sports from "./components/Sports";
import Pagenotfound from "./components/Pagenotfound";
import Science from "./components/Science";
import Entertainment from "./components/Entertainment";
import Health from "./components/Health";
import Login from "./components/Auth/Login";
import { useEffect, useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import Details from "./components/Details";

function App() {
  const nav = useNavigate()
  const [isLogin,setIsLogin] = useState(false)

  console.log("islogin==>",isLogin) 
 
  useEffect(()=>{
 const token = localStorage.getItem('token')
  if(token !== null || token !== undefined){
    setIsLogin(true)
  }
  else{
    setIsLogin(false)
  }
  },[])
  return (
    <>
        <Routes>
          <Route path="/" element={ isLogin ? <Navigate to='/home'/> : <Login setIsLogin={setIsLogin}/>} />
          <Route path="/home" element={isLogin ? <Home /> : <Navigate to="/" />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin}/>} />
          <Route path="/home" element={<Home />}/>
          <Route path="/sports" element={<Sports />} />
          <Route path="/science" element={<Science />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/details" element={<Details />}/>
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
    </>
  );
}

export default App;
