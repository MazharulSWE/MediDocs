import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = ()=>{
    const [user, setUser] = useState({});

    const [isLoading, setIsaLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle =()=>{
        setIsaLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        })
        .finally(() => setIsaLoading(false));

    }
// observe user state change
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsaLoading(false);
        });
        return ()=> unsubscribed;
    },[])

    const logOut =()=>{
        setIsaLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(()=> setIsaLoading(false));
    }

    return{
       user,
       isLoading,
       signInUsingGoogle,
       logOut
    }
}

export default useFirebase;