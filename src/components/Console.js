import React, { useState, useEffect } from 'react';
import ComponentsPlots from './ComponentsPlots'
import Searchbar from './Searchbar';
import CityLocations from '../worldcities.json';


function Console() {

    // const { REACT_APP_OPENWEATHER_API_KEY } = process.env;
    const [location, setLocation] = useState([34.05, -118.24]);
    const [ latitude, longitude ] = location;
    const [airData, setAirData] = useState(null);

    async function fetchCurrent() {
        // let request = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_OPENWEATHER_API_KEY}`;
        let request = `https://safe-send.deno.dev/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=`;
        let response = await fetch(request);
        let data = await response.json();
        return data;
    }

    async function fetchForcast() {
        // let request = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_OPENWEATHER_API_KEY}`;
        let request = `https://safe-send.deno.dev/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=`;
        let response = await fetch(request);
        let data = await response.json();
        return data;
    }

    const handleSearch = () => {

        console.log(`Fetching air data for: (${latitude}, ${longitude})`);

        fetchForcast().then((forcast) => {

            let forcastData = forcast.list;

            fetchCurrent().then((current) => {

                const nowData = current.list[0];
                forcastData.unshift(nowData);
                setAirData(forcastData);

            });

        });
    };

    useEffect(() => {
        handleSearch();
    }, [location]);

    return (

        <div className='parallaxContainer'>
            <img src={require('../assets/images/legend.png')} alt="Legend" className='legend'/>
            <Searchbar data={CityLocations} setLocation={setLocation} />
            <ComponentsPlots data={airData} />
        </div>

    );

}

export default Console;
