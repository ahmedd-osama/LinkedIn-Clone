import { Stack } from 'react-bootstrap'
import classes from './Home.module.css'
import { ButtonSecondary } from '../../UI/Styled-UI/StyledElements';
import ReactPlayer from 'react-player';
import { useState } from 'react';
const PostCard = ({postDetails}) => {
  const {user,postDescription, image,video, comments} = postDetails;
  const timeStamp = new Date(user.date.seconds*1000).toLocaleDateString();
  const [liked, setLiked] = useState(false)
  const [likedNumber, setLikedNumber] = useState(Math.floor(Math.random()*100))
  return (
    <div className={`${classes.card} p-2`}>
      <header className='p-1 d-flex gap-2 align-items-center'>
        <img src={user.photoURL} alt="" width='50px' height='50px' className={'rounded-circle'} />
        <Stack className="user-info justify-content-center ">
          <p >{user.displayName}</p>
          <p  className="text-gray fs-7">{user.description}</p>
          <p  className="text-gray fs-7">{timeStamp}</p>
        </Stack>
        <ButtonSecondary className='mb-auto ms-auto'>
          <img src="/images/ellipsis.svg" width={'20px'} alt="" />
        </ButtonSecondary>
      </header>
      <p className='p-1'>
        {postDescription}
      </p>
      {image && <img src={image} alt="" /> }
      {video && <ReactPlayer width='100%' height='auto' style={{aspectRatio: '16/9'}} url={video} /> }
      <Stack direction='horizontal'>
        <img src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss" width='15px' alt='like icon' />
        <img src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49" width='15px' alt='like icon' />
        <span className='fs-7 text-gray-900 px-1'>{likedNumber}</span>
        <span className='fs-7 text-gray-900 px-1'>0 Comments</span>
        <span className='fs-7 text-gray-900 px-1'> 0 share</span>
      </Stack>
      <Stack direction='horizontal' className='justify-content-between pt-2 mt-1' style={{borderTop: '2px solid var(--hover-shade)'}} >
        <ButtonSecondary className='d-flex justify-content-center align-items-center gap-1 fs-6 fs-md-5 text-gray-900' onClick={()=>{setLiked(prev=> !prev); setLikedNumber(prev=> liked? prev - 1 : prev+1)}}>
          <img src={liked?"https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss":'/images/like-icon.svg'} alt="" />
          {liked?'Liked':'Like'}
        </ButtonSecondary>
        <ButtonSecondary className='d-flex justify-content-center align-items-center gap-1 fs-6 fs-md-5 text-gray-900'>
          <img src='/images/comment-icon.svg' alt="" />
          Comment
        </ButtonSecondary>
        <ButtonSecondary className='d-flex justify-content-center align-items-center gap-1 fs-6 fs-md-5 text-gray-900'>
          <img src='/images/share-icon.svg' alt="" />
          Share
        </ButtonSecondary>
        <ButtonSecondary className='d-flex justify-content-center align-items-center gap-1 fs-6 fs-md-5 text-gray-900'>
          <img src='/images/send-icon.svg' alt="" />
          Send
        </ButtonSecondary>
      </Stack>
    </div>
  )
}

export default PostCard