import React from "react";
import "./home.css";

const Home = (props) => {
    function cerrarSesion(){
        document.getElementById("caja_menu").style.display="none";
        document.getElementById("login-content").style.display="block";
        document.getElementById("user").value="";
        document.getElementById("password").value="";
        document.getElementById("user").focus();

    }

    return(
        <div id="caja_menu">
            <h1>Bienvenido, {props.user} has iniciado sesion correctamente!!</h1>
            <button className="cerrar" onClick={cerrarSesion}>Cerrar Sesion</button>
        </div>
        
    )
}
export default Home;