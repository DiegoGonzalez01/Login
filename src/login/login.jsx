import React, { useState } from "react";
import Home from "../components/home/home.jsx"
import "./login.css";

const Login = () =>{

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [miLogin, setLogin] = useState('false');
    
    
    function IniciarSesion(e){
        e.preventDefault();
        var user = document.getElementById('user').value;
        var password = document.getElementById('password').value;

        if (password.length===0 && user.length === 0){
            alert("Hay campos vacios");

        }else{
            if ( user==="Diegos" && password==="123456"){
                setLogin('true');
                document.getElementById('login-content').style.display= 'none';
            }else{
                alert('Datos erroneos');
                setLogin('false');
                document.getElementById('user').value="";
                document.getElementById('password').value="";
                // document.getElementById('user').focus();
            };
        };
    };

    
    
    
    return(
        <div className="login-container">
            <form id="login-content">
                <h1 id="title">¡¡Bienvenido!!</h1>
                <label text="usuario">Usuario</label>
                <input type="text" placeholder="Usuario" id="user" onChange={(e)=> setUser(e.target.value) } required />

                <label text="usuario">Contraseña</label>
                <input type="password" placeholder="Contraseña" id="password" onChange={(e)=> setPassword(e.target.value)} required />
                <br></br>
                <button type="button" onClick={IniciarSesion} value="Login">Entrar</button>
            </form>
    
            {miLogin === 'true' && <Home user={user}/>  }
        </div>
    )
}
export default Login;