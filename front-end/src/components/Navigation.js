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

  &.selected {
      font-weight: bold;
      font-style: italic;
      padding: 0 5px 0 5px;
      border: 1px solid #6699cc; 
  }

  &:hover {
    color: #6699cc;
  }
  
`


const Navigation = () => {
    return (
        <NavLinks>
            <StyledNavLink activeClassName="selected" exact to="/"> Home </StyledNavLink>
            <StyledNavLink activeClassName="selected" exact to="/driver-login"> Drivers </StyledNavLink>
            <StyledNavLink activeClassName="selected" exact to="/lookup"> SEARCH FOR A TRUCK </StyledNavLink>
            <StyledNavLink activeClassName="selected" exact to="/foodie-login"> Foodies </StyledNavLink>
            <StyledNavLink activeClassName="selected" exact to="/register"> Register </StyledNavLink>
        </NavLinks>
    );
};

export default Navigation;