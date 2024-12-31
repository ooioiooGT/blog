import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');
    const [error , setError] = useState('');
    const navigate = useNavigate();
    const signUp = async () => {
        try{
            if(password !== confrimPassword){
                setError('Password and confirm Password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password  );
            navigate("/articles");
        }catch(e){
            setError(e.message);
        }
    }

    return ( 
        <>
        <h1> Sign Up  </h1>
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
        <input 
            value={confrimPassword}
            onChange={e => setConfrimPassword(e.target.value)}
            type="password" 
            placeholder="password"/>
        <button onClick={signUp}> Create Account </button>
        <Link to="/login">Have account already? Login Here </Link>
        </>
    )
}
export default SignUpPage;