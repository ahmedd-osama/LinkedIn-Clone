import { useState } from "react";
import { ButtonPrimary } from "../../UI/Styled-UI/StyledElements";
import classes from "./Home.module.css";
const RightSide = () => {
  const [followingList, setFollowingList] = useState({
    github: false,
    linkedin: false,
  })

  return (
    <>
      <div className={`${classes.card} p-2 d-flex flex-column gap-2`}>
        <h6 className='text-gray-900'> Add to yout feed:</h6>
        <div className="feed-item d-flex align-items-center gap-1 ">
          <img src="/images/home-logo.svg" className='rounded-circle p-1' width='45px'alt="" />
          <div className="feed-info h-100">
            <p className="mt-auto">#linkedIn</p>
            <ButtonPrimary className='fs-7 py-0 px-1' onClick={()=>{setFollowingList(prev=>({...prev, linkedin: !prev.linkedin}))}}>{!followingList.linkedin?'Follow': 'Follwing'}</ButtonPrimary>
          </div>
        </div>
        <div className="feed-item d-flex align-items-center gap-1 ">
          <img src="/images/github.svg" className='rounded-circle' width='45px'alt="" />
          <div className="feed-info h-100">
            <p className="mt-auto">#GitHub</p>
            <ButtonPrimary className='fs-7 py-0 px-1' onClick={()=>{setFollowingList(prev=>({...prev, github: !prev.github}))}}>{!followingList.github?'Follow': 'Follwing'}</ButtonPrimary>
          </div>
        </div>
      </div>
      <div className={`${classes.card} p-2 mt-2`}>
        <img src="/images/banner-image.jpg" alt="" className="rounded" />
      </div>
    </>
  );
};

export default RightSide;
