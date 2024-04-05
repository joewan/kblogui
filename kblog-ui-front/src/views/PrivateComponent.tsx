import { Navigate, useLocation } from "react-router-dom";


function PrivateComponent(props:any) {

    var token = localStorage.getItem("token")
    var location = useLocation()
    if (token) {
        return props.children;
    } else {
        return <Navigate to={{pathname:'/login', search:"?redirect="+location.pathname}}></Navigate>
    }
}

export default PrivateComponent;