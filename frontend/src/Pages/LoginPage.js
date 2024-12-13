import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword}from "firebase/auth"
const LoginPage = () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const logIn = async() =>{
        try{
        await signInWithEmailAndPassword(getAuth(), email, password);
        navigate('/article');
        }catch(e){
            setError(e.message);
          
        }
    }
    return ( 
        <>
        <h1> Log In </h1>
        {error && <p className="error">{error}</p>}
        <input 
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email"/>
        <input 
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password" 
            placeholder="password"/>
        <button onClick={logIn}> Log In </button>
        <Link to="/signup">don't have account? create one here</Link>
        </>
    )
}
export default LoginPage;