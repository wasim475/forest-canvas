
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../Auth provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loding}= useContext(AuthContex)
    const location = useLocation()
    if(loding){
        return  <div className="text-center">
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>
};

export default PrivateRoute;