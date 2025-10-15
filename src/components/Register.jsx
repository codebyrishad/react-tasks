import React from "react";
import { useNavigate } from "react-router-dom";


function Register(){
    const navigate = useNavigate();
    const handleSubmit =(e) => {
e.preventDefault();

navigate("/login")

    };

    return(
        <>
        <h2>registration page</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" /> <br />
            <input type="email" placeholder="Email"/> <br/>
            <input type="password" placeholder="password"/><br />
           <input type="submit" value="Register" />

        </form>
        
        
        </>
    )
}

export default Register