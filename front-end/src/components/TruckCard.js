import React from "react";
import styled from 'styled-components'


const CharacterName = styled.h2`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: black;

    &:hover {
        color: black;
        font-size: 2rem;
    }
`;

const CardBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 5em 25px 5em;
    border: 6px solid #black;

`;

const CharacterInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CharacterInfoList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items:center;
    color: black;
    font-size: 1rem;
    list-style: none;
    padding: 0;
    
    li {
        margin-right: 15px;

    }
    li:last-child {
        margin-right: 0;
    }
`;


export default function CharacterCard(props) {
    return (
      <CardBorder>
        <CharacterName>{props.vehicle.model}</CharacterName>
        <CharacterInfo>
          <CharacterInfoList>
            <li>Model: {props.vehicle.model}</li>
            <li>Passengers: {props.vehicle.passengers}</li>
            <li>Type: {props.vehicle.vehicle_class}</li>
          </CharacterInfoList>
        </CharacterInfo>
  
      </CardBorder>
    );
  }