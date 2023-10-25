import { Stack } from 'react-bootstrap'
import { ButtonSecondary } from '../../UI/Styled-UI/StyledElements'
import classes from './Home.module.css'
import { useSelector } from 'react-redux'
import AddPostModal from './AddPostModal'
import { useState } from 'react'

const CreatePostCard = ({isLoading}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal= ()=> setShowModal(true)
  const closeModal= ()=> setShowModal(false)
  const user = useSelector(state=> state.userState.user);
  return (
    <>
    <div className={`${classes.card} p-2`}>
      <Stack direction='horizontal' gap={3}>
        <img src={user?.photoURL || '/images/user.svg'} width='50px' alt="user pic" className={'rounded-circle'} /> 
        <ButtonSecondary className='flex-grow-1 text-start box-shadow-default p-3 rounded-pill' style={{maxWidth: '350px'}} onClick={openModal} disapled={isLoading || false}>
          Create A New Post!
        </ButtonSecondary>
      </Stack>
      <Stack direction='horizontal' className='justify-content-between mt-3'>
        <ButtonSecondary className='d-flex align-items-center gap-1' onClick={openModal} disapled={isLoading || false}>
          <img src="/images/photo-icon.svg" width='24px' alt="" />
          Photo
        </ButtonSecondary>
        <ButtonSecondary className='d-flex align-items-center gap-1' onClick={openModal} disapled={isLoading || false}>
          <img src="/images/video-icon.svg" width='24px' alt="" />
          Video
        </ButtonSecondary>
        <ButtonSecondary className='d-flex align-items-center gap-1' onClick={openModal} disapled={isLoading || false}>
          <img src="/images/event-icon.svg" width='24px' alt="" />
          Event
        </ButtonSecondary>
        <ButtonSecondary className='d-flex align-items-center gap-1' onClick={openModal} disapled={isLoading || false}>
          <img src="/images/article-icon.svg" width='24px' alt="" />
          Write Articel
        </ButtonSecondary>
      </Stack>
    </div>
      <AddPostModal show={showModal} handleClose={closeModal} user={user}/>
    </>
  )
}

export default CreatePostCard