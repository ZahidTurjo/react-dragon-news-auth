/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const location= useLocation()
    console.log(location);
    if(loading){
        return <h2 className="text-center text-2xl"> loading ...</h2>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
        
};

export default PrivateRoutes;