import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import TruckSearchForm from './TruckSearchForm';
import TruckCard from './TruckCard';

const TruckLookUp = () => {

    const[data, setData] = useState([]);
    const[searchQuery, setSearchQuery] = useState("");

    const handleChange = event => {
        setSearchQuery(event.target.value);
    }

    console.log(data)

    useEffect (() => {
        axios
         .get("https://swapi.co/api/vehicles/")
         .then(res => {
             console.log(res.data.results);
             const vehicles = res.data.results.filter(vehicle =>
                vehicle.model
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
             );
             setData(vehicles);
         })
         .catch(err => console.log(err));
      } ,[searchQuery]);


      return (
          <div>
              <TruckSearchForm
                placeHolder="Search Food Trucks..."
                searchQuery={searchQuery}
                handleChange={handleChange}
                />

            {data.map((vehicle, index) => {
                return <TruckCard key={index} vehicle={vehicle}/>
                }
            )};
          </div>
    );
}

export default TruckLookUp