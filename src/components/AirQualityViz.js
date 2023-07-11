import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function AirQualityViz(props) {

    const data = props.data;
    const day = 1;

    const hours = 24;
    const timeFrame = {
        start: day * 24 - hours,
        stop: day * 24 - 1
    }
    
    let aqiData = null;
    let componentsData = null;

    if (data) {

        aqiData = data.map((element) => {
            if (element.main && element.main.aqi) {
                return {AQI: element.main.aqi};
            } else {
                return null;
            }
        }).slice(timeFrame.start, timeFrame.stop);

        componentsData = data.map((element) => {
            if (element.components) {
                return element.components;
            } else {
                return null;
            }
        }).slice(timeFrame.start, timeFrame.stop);

    }

    const AQIGraph = () => {

        return (

            <ResponsiveContainer width="50%" height={300}>
                <AreaChart width={500} height={500} data={aqiData}>
                    <CartesianGrid/>
                    <XAxis dataKey="Time" />
                    <YAxis domain={[0, 5]} />
                    <Tooltip />
                    <Area dataKey="AQI" stackId="1" 
                        stroke="navy" fill="navy" />
                </AreaChart>
            </ResponsiveContainer>

        );

    };

    const ComponentsGraph = () => {

        return (

            <ResponsiveContainer width="50%" height={300}>
                <AreaChart width={500} height={500} data={componentsData}>
                    <CartesianGrid/>
                    <XAxis dataKey="Time" />
                    <YAxis />
                    <Tooltip />
                    {/* Gases: co, nh3, no, no2, o3, pm2_5, pm10, so2 */}

                    {/* <Area dataKey="co" stackId="1" 
                        stroke="green" fill="red" />
                    <Area dataKey="o3" stackId="2" 
                        stroke="blue" fill="orange" /> */}

                    <Area dataKey="nh3" stackId="1" 
                        stroke="red" fill="red" />
                    <Area dataKey="no2" stackId="2" 
                        stroke="pink" fill="orange" />
                    <Area dataKey="no" stackId="3" 
                        stroke="yellow" fill="yellow" />

                </AreaChart>
            </ResponsiveContainer>

        );

    };
   
    return (
        <div className='graphContainer'>
            <ComponentsGraph />
            <AQIGraph />
        </div>
    );
}
   
export default AirQualityViz;


