import React from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate =useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        navigate("/home")
    }
return(
    <>
    <h2>login page</h2>
    <form onSubmit={handleLogin}>
        <input type= "text" placeholder="username"/> <br/>
        <input type="password" placeholder="password"/><br/>
        <input type="submit" value="login"/>
    </form>
    
    </>
)
}

export default Login