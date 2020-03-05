import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LinkDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

const DriverLink = styled.div`
    display: flex;
    justify-content: space-around;
`

const DinerLink = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <LinkDiv>
          <div>
              <Link to = '/driver-login'>DRIVER LOGIN</Link>
          </div>
          <div>
              <Link to = '/diner-login'>DINER LOGIN</Link>
          </div>
      </LinkDiv>
    </section>
  );
}