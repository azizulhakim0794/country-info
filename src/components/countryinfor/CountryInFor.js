import React, { useState } from 'react';
import { useEffect } from 'react';
import CountryInfo from '../CountryInfo/CountryInfo';

const CountryInFor = () => {
    const [country, setCountry] = useState([]);
    useEffect(() =>{
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(res => res.json())
        .then(data =>setCountry(data))
    },[])
    return (
        <div>
            <h1> all country length :</h1>
            {
                country.map(country => <CountryInfo  country={country}></CountryInfo>)
            }
        </div>
    );
};

export default CountryInFor;