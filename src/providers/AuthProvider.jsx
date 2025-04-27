import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user with email and password
    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user login with email and password
    const userLogin = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // on auth state change
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log('this is current user',currentUser)
            }
            else {
                setUser(null);
                // setLoading(true);
            }
        })
        return () => unSubscribe();
    },[])

    // logout
    const logOut = () => {
        signOut(auth)
        .then()
        .catch()
    }

    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;