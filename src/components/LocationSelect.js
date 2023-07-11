import React, { useState } from 'react';

function LocationSelect() {

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

        console.log(`Fetching data for (${latitude}, ${longitude}):`);

        fetchForcast().then((forcast) => {

            setAirData(forcast.list);

            fetchCurrent().then((current) => {

                setAirData((data) => {
                    data.unshift(current.list);
                    return data;
                });

            });

        });
    };

    return (

        <div className='locationSelector'>
            <input type="number" value={latitude} onChange={handleLatitudeUpdate} />
            <input type="number" value={longitude} onChange={handleLongitudeUpdate} />
            <button onClick={handleSearch}>Search</button>
            {/* <h1>{String(airData)}</h1> */}
        </div>

    );

}

export default LocationSelect;
