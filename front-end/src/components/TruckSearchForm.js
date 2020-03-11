import React from "react";
import styled from 'styled-components';

const SearchFormSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;

    input {
        height: 25px;
        width: 150px;
        font-size: 1rem;
    }

`

export default function TruckSearchForm(props) {
  return(
    <SearchFormSection>
      <form>
        <input 
          type="text" 
          placeholder={props.placeHolder} 
          value={props.searchQuery}
          onChange={props.handleChange}/>
      </form>
    </SearchFormSection>
  );
}