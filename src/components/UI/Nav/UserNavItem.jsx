import { Link } from "react-router-dom"
import { ButtonSecondary } from "../Styled-UI/StyledElements"
import { signOutAPI } from "../../../redux/actions"
import { useDispatch } from "react-redux";
const UserNavItem = ({photoURL}) => {
  const dispatch = useDispatch();
  const signOutHandler = ()=>{
    dispatch(signOutAPI())
  }
  return (
    <li className='profile-item '>
      <Link className={'d-flex flex-column align-items-center'}>
      <img src={`${photoURL?photoURL:'/images/user.svg'}`} alt="User Image" className='user-image'/>
      <span className='d-flex text-center'>
        Me
        <img src="/images/down-icon.svg" alt="arrow-down" className='d-inline-block'/>
      </span>
      </Link>
      <div className="profile-options flex-column align-items-center justify-content-evenly bg-white p-2 w-fit text-danger rounded">
        <ButtonSecondary className='text-danger' style={{whiteSpace: 'nowrap'}} onClick={signOutHandler}>Sign Out</ButtonSecondary>
      </div>
    </li>
  )
}

export default UserNavItem