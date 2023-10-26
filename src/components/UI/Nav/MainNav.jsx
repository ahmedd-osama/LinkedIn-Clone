import { Nav, Logo, SearchIcon, NavList } from "../Styled-UI/StyledElements";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import'./MainNav.css'
import NavListItem from "./NavListItem";
import UserNavItem from "./UserNavItem";
import { useSelector } from "react-redux";
const MainNav = () => {
  const user = useSelector(state=> state.userState.user)
  return (
    <Nav >
      <Container xlg className="d-flex justify-content-center aling-items-center py-2 gap-3 p-0">
        <Link to="/" className='d-flex align-items-center' >
          <Logo src="./images/login-logo.svg" alt="" priority="heigh" className='' />
        </Link>
        <div className="me-auto d-flex align-items-center ">
          <input type="text" placeholder='Search' className='border-0 search-input' />
          <SearchIcon>
            <img src="/images/search-icon.svg" width='18px' alt="search icon" />
          </SearchIcon>
        </div>
        <NavList className=' d-flex gap-1 gap-md-2 gap-lg-4 nav-list '>
          {['home','messaging', 'jobs', 'network', 'notifications','work',].map(item=> <NavListItem key={item} to={`/${item}`} iconPath={`/images/nav-${item}.svg`} title={item}/>)}
          <UserNavItem photoURL = {user?.photoURL || null}/>
        </NavList>
      </Container>
    </Nav>
  );
};

export default MainNav;
