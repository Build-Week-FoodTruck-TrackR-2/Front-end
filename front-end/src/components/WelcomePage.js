import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px 25px 25px 25px
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
  font-size: 4rem;
  color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-top: 15px;
`

export default function WelcomePage() {
  return (
    <section className="welcome">

      <LinkDiv>
         
              <StyledLink to = '/driver-login'>DRIVERS</StyledLink>
   
 
              <StyledLink to = '/foodie-login'>FOODIES</StyledLink>
 
      </LinkDiv>
    </section>
  );
}