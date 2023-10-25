import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {ButtonPrimary, ButtonSecondary, Logo, NavList, Nav} from '../Styled-UI/StyledElements'
const LoginNav = () => {
  return (
    <Nav>
      <Container className='d-flex aling-items-center py-2'>
        <Link to="/" className='me-auto'>
        <Logo src="./images/login-logo.svg" alt=""  priority = 'heigh'/>
        </Link>
        <ul className=' d-flex gap-2'>
          <li> <Link> <ButtonSecondary className='fs-6'>Join</ButtonSecondary> </Link> </li>
          <li> <Link> <ButtonPrimary className='fs-6'>Sign Up</ButtonPrimary> </Link> </li>
        </ul>
      </Container>
    </Nav>
  )
}

export default LoginNav