import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = styled.nav`
    display: flex;
    justify-content: space-evenly;
    margin-top: 1%;

`

const StyledNavLink = styled(NavLink)`
  color: palevioletred;
  font-weight: bold;
  text-decoration: none;
`


const Navigation = () => {
    return (
        <NavLinks>
            <StyledNavLink to="/"> Home </StyledNavLink>
            <StyledNavLink to="/register"> Register </StyledNavLink>
        </NavLinks>
    );
};

export default Navigation;