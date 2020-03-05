import React from "react";
import styled from 'styled-components';

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
              <h1>DRIVER LOGIN</h1>
          </div>
          <div>
              <h1>DINER LOGIN</h1>
          </div>
      </LinkDiv>
    </section>
  );
}