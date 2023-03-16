import styled from 'styled-components'
import { Outlet, Link } from 'react-router-dom'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fafafa;
`

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`

const NavLink = styled(Link)`

`

const Navbar = () => {
  return (
    <div>
      <Nav className="nav">
        <NavLink to="/">Logo</NavLink>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/service">Services</NavLink>
          <NavLink>Offers</NavLink>
          <NavLink>About Us</NavLink>
        </NavLinks>
        <NavLinks>
          <NavLink>Login</NavLink>
          <NavLink>Register</NavLink>
        </NavLinks>
      </Nav>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Navbar