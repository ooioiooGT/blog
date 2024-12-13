import { useEffect, useState } from "react"
import { getAuth,onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    const [user,setUser] = useState(null);
    const [isLoding, setIsLoding] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            setUser(user);
            setIsLoding(false);
        });
        return unsubscribe
    },[])
    return {user, isLoding}
}
export default useUser