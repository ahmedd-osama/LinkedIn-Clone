import styled from "styled-components"
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
`
export const Logo = styled.img`
  width: 120px;
  `
export const ButtonPrimary = styled.button`
  font-weight: 600;
  background-color: transparent;
  padding: 0.5em 1em;
  border-radius: 10em;
  border: 1px solid blue;
  cursor: pointer;
  color: var(--primary);
  transition: background 200ms ease-out;
  &:hover{
    background-color: #3837371a;
  }
  &:disabled,
  &[disabled]{
    filter: grayscale(1);
    cursor: auto;
  }
  &:disabled:hover,
  &[disabled]:hover{
    background-color: initial;
  }
`
export const NavList = styled.ul`
  list-style: none;
  @media (max-width: 989px){
    padding: 8px 0;
    bottom: 0;
    background-color: white;
    width: 100%;
    position: fixed;
  }
`
export const ButtonSecondary = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background 200ms ease-out;
  &:hover{
    background-color: #3837371a;
  }
`
export const SearchIcon = styled.div`
  cursor: pointer;
` 