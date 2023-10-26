import { Col, Container, Row, Stack } from 'react-bootstrap'
import LoginNav from '../UI/Nav/LoginNav'
import Section from '../UI/Section/Section'
import { ButtonPrimary, ButtonSecondary } from '../UI/Styled-UI/StyledElements'
import { useDispatch, useSelector } from 'react-redux'
import { signInAPI } from '../../redux/actions'
import { setGuestMode, setUser } from '../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const Login = () => {
  const userState = useSelector(state=> state.userState )
  const user = userState.user;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(signInAPI())
  }
  const guestHandler = ()=>{
    dispatch(setUser({displayName:'Guest User', email: 'guest@linkedIn-clone.com'}));
    dispatch(setGuestMode(true));
  }
  useEffect(() => {
    if(user){
      navigate('/home')
    }
  }, [user])
  return (
    <>
    <LoginNav/>
    <Section className=' '>
      <Container className=''>
        <Row className='h-100 vh-85'>
          <Col  md={6} className='d-flex  py-3 flex-column justify-content-center h-100 gap-4 my-auto'>
            <h1 className='fs-1 text-center' style={{color: "var(--primary)"}}>Your Professional Community </h1>
            <form onSubmit={submitHandler}>
            <Stack gap={2}>
            <ButtonPrimary className='d-flex justify-content-center gap-2 w-100' type='submit'>
              <img src="./images/google.svg" alt="" />
              Continue with Google
            </ButtonPrimary>
            <ButtonSecondary className='d-flex justify-content-center gap-2 w-100' type='button' style={{textDecoration: 'underline'}} onClick={guestHandler} >
              Continue as guist 🠆
            </ButtonSecondary>
            </Stack>
            </form>
          </Col>
          <Col  md={6}  className='d-flex py-3  flex-column justify-content-center'><img src="./images/login-hero.svg" alt="" className='my-auto d-block' /></Col>
        </Row>
      </Container>
      {/* <Link to='/home'>home</Link> */}
    </Section>
    </>
  )
}


export default Login