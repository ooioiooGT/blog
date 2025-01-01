import { Link, useNavigate} from "react-router-dom";
import useUser from "./hooks/useUser";
import { getAuth,signOut } from "firebase/auth";

const Navbar = () => {
    const {user} = useUser();
    const navigate = useNavigate();
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to ="/Articles">Articles</Link></li>
            </ul>
            <div className="nav-right">
                {user
                    ? <button onClick={()=>{
                        console.log("logout")
                        signOut(getAuth())
                    }} >Log out</button>
                    : <button onClick={()=>{ 
                        navigate('/login') 
                    }} >Log In</button>
                }
            </div>
        </nav>
    )
}
export default Navbar;