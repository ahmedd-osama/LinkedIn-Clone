import {  useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

// const RequireAuth = ({children}) => {
//   const user = useSelector(state => state.userState.user);
//   const navigate = useNavigate();
//   useEffect(()=>{
//     if(!user){
//       navigate('/', {replace: true});
//       return;
//     }
//   }, [user])
//   return children
// }

// export default RequireAuth

const RequireAuth = (Component)=>{
  return (props)=>{
    const user = useSelector(state => state.userState.user);
    return (<>{user? (<Component {...props}/>) : (<Navigate to='/'/>)}</>)
  }
}
export default RequireAuth