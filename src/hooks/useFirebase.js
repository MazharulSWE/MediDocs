import { getAuth, 
         signInWithPopup, 
         GoogleAuthProvider, 
         signOut, 
         onAuthStateChanged,
         signInWithEmailAndPassword,
         createUserWithEmailAndPassword, 
         updateProfile, } from "firebase/auth";
import { useEffect, useState } from "react";
import Register from "../pages/Login/Register/Register";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";



initializeAuthentication();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();



const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    // const [isLoading, setIsaLoading] = useState(true);



// Google sign in
    const signInUsingGoogle =()=>{
        // setIsaLoading(true);
        return signInWithPopup(auth, googleProvider).catch((error)=>{
            setError(error.message)
        });
        // .then(result =>{
        //     setUser(result.user);
        // })
        // .finally(() => setIsaLoading(false));

    };

    // sign in user
    const userSignInWithEmailPass = (email, password) =>{
        return(
            signInWithEmailAndPassword(auth, email,password)
            .catch((error) => {
                setError("wrong email or password");
            })
        );
    };


    // sign out user
    const userSignOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .catch((error) =>{
            //An error occurred
        })
        .finally(() =>{
            window.location.reload();
        });
    };
     


// observe user state change
    useEffect(()=>{
       onAuthStateChanged(auth,(user) =>{
            if (user) {
                setUser(user);
            } else {
                // setUser({})
            }
            // setIsaLoading(false);
        });
        // return ()=> unsubscribed;
    },[])

    // const logOut =()=>{
    //     setIsaLoading(true);
    //     signOut(auth)
    //     .then(()=>{})
    //     .finally(()=> setIsaLoading(false));
    // }

    return{
       user,
       error,
       userSignOut,
       setUser,
       setError,
    //    isLoading,
       signInUsingGoogle,
       userSignInWithEmailPass,
    //    logOut
    }
}

export default useFirebase;