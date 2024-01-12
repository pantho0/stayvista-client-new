/* eslint-disable react/prop-types */
import { Navigate} from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";


const AdminRoute = ({children}) => {
    const [role, isloading] = useRole()
    console.log(isloading);
    if(isloading) return <Loader/>
    if(role === 'admin') return children;
    return <Navigate to='/dashboard'/>
};

export default AdminRoute;