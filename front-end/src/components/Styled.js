import React from 'react';
import styled from 'styled-components';



export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10% 15% 0 15%;
  padding: 0 0 10px 0;
  align-items: center;
  border: 3px solid #CD5C5C; 

    label{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #6699cc;
      font-size: 1.25rem;
      margin: 5px 5px 0px 5px;
      width: 50%;
      font-weight: bold
    }
    input {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #36454F;
      font-size: 1rem;
      margin: 5px;
      width: 50%;
      font-weight: bold
    }
    span {
      color: #CD5C5C;
      border: 2px solid #CD5C5C;
      padding: 2px 5px 2px 5px; 
      text-transform: uppercase;
    }

  `
