import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"



const authContextHook = () => {
    return useContext(AuthContext);
}



export {authContextHook};