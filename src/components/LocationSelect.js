import React, { useState } from 'react';

function LocationSelect() {

    const { REACT_APP_OPENWEATHER_API_KEY } = process.env;
    const [latitude, setLatitude] = useState(50);
    const [longitude, setLongitude] = useState(50);

    const handleLatitudeUpdate = (event) => {
        setLatitude(parseInt(event.target.value));
    };

    const handleLongitudeUpdate = (event) => {
        setLongitude(parseInt(event.target.value));
    };

    const handleSearch = () => {
        console.log({latitude, longitude});
    };

    async function fetchCurrent() {
        let request = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_OPENWEATHER_API_KEY}`;
        let response = await fetch(request);
        let data = await response.json();
        return data;
    }

    async function fetchForcast() {
        let request = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_OPENWEATHER_API_KEY}`;
        let response = await fetch(request);
        let data = await response.json();
        return data;
    }
    
    //fetchCurrent().then(data => console.log(data));
    //fetchForcast().then(data => console.log(data));

    return (

        <div className='locationSelector'>
            <input type="number" value={latitude} onChange={handleLatitudeUpdate} />
            <input type="number" value={longitude} onChange={handleLongitudeUpdate} />
            <button onClick={handleSearch}>Search</button>
        </div>

    );

}

export default LocationSelect;
