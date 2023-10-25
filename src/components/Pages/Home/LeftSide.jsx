import classes from './Home.module.css'
import { useSelector } from 'react-redux'
import { ButtonSecondary } from '../../UI/Styled-UI/StyledElements'
const LeftSide = () => {
  const user = useSelector(state=> state.userState.user)
  return (
    <div className={classes.card}>
      <img src="/images/card-bg.svg" alt="" />
      <div className={`${classes['profile-pic']} position-relative w-25 mx-auto`}><img src={user?.photoURL || '/images/user.svg'} className='rounded-circle' alt="" /></div>
      <h5 className='text-center'>Welcome <br/> {user?.displayName || 'Guest User'}</h5>
      <ButtonSecondary className="px-2 py-3 box-shadow-default d-flex justify-content-between align-items-center w-100 rounded-0">
        <div className="connections w-fit">
          <p className='text-start fs-7 text-gray'>Connections</p>
          <p className='text-start '>Grow your network</p>
        </div>
        <img src="/images/widget-icon.svg" alt="" />
      </ButtonSecondary>
      <ButtonSecondary className="p-2 box-shadow-default d-flex justify-content-start align-items-center w-100 rounded-0">
        <img src="/images/item-icon.svg" alt="" />
          <p className='text-start '>My Items</p>
      </ButtonSecondary>
    </div>
  )
}

export default LeftSide