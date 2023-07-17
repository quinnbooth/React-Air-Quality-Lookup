import React, { useState } from 'react';
import ComponentsPlots from './ComponentsPlots'

function Console() {

    const { REACT_APP_OPENWEATHER_API_KEY } = process.env;
    const [latitude, setLatitude] = useState(50);
    const [longitude, setLongitude] = useState(50);
    const [airData, setAirData] = useState(null);

    const handleLatitudeUpdate = (event) => {
        setLatitude(parseInt(event.target.value));
    };

    const handleLongitudeUpdate = (event) => {
        setLongitude(parseInt(event.target.value));
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

    const handleSearch = () => {

        fetchForcast().then((forcast) => {

            let forcastData = forcast.list;

            fetchCurrent().then((current) => {

                const nowData = current.list[0];
                forcastData.unshift(nowData);
                setAirData(forcastData);

            });

        });
    };

    return (

        <div className='parallaxContainer'>
            <h1 className='airHeader'>AIR QUALITY</h1>
            <div className='controlsContainer'>
                <input type="number" value={latitude} onChange={handleLatitudeUpdate} />
                <input type="number" value={longitude} onChange={handleLongitudeUpdate} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='legend'></div>
            <ComponentsPlots data={airData} />
        </div>

    );

}

export default Console;
