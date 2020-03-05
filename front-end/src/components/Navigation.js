import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = styled.nav`
    display: flex;
    justify-content: space-evenly;

`

const Navigation = () => {
    return (
        <NavLinks>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/drivers"> Driver </NavLink>
            <NavLink to="/diners">Diners</NavLink>
        </NavLinks>
    );
};

export default Navigation;