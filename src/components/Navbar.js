import styled from 'styled-components'
import { Outlet, Link } from 'react-router-dom'
import UserDetail from './auth/UserDetail'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const LoggedOut = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return(
    <>
    {
      authUser==null ? 
      <NavLinks>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/regis">Register</NavLink>
      </NavLinks>:
      <UserDetail/>
    }
    </>
  )
  
}

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
        <LoggedOut />
      </Nav>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

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

export default Navbar