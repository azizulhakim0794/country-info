import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Flag from '../Flag/Flag';

const CountryInfo = (props) => {
    const [countrys, setCountry] = useState()
    
    const {name,population,} = props.country
    return (
        <div>
        
        <p>Name:{name}</p>
        <p> Populations: {population}</p>
        <p> This country image</p>
        </div>
    );
};

export default CountryInfo;