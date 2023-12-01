import { Link } from "react-router-dom";
import Button from "../components/button";
function Login() {
    return(
        <>
            <h1>Login</h1>
            <Button linkValue='/home' buttonValue='Connexion' />
        </>
        
    );
}

export default Login;