import React from 'react';
import GasLevelsPlot from './GasLevelsPlot';

function ComponentsPlots(props) {

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
   
    return (
        <div className='graphContainer'>
            <GasLevelsPlot className="gasPlot" data={componentsData} gas="so2" />
            <GasLevelsPlot className="gasPlot" data={componentsData} gas="no2" />
            <GasLevelsPlot className="gasPlot" data={componentsData} gas="pm10" />
            <GasLevelsPlot className="gasPlot" data={componentsData} gas="pm2_5" />
            <GasLevelsPlot className="gasPlot" data={componentsData} gas="o3" />
            <GasLevelsPlot className="gasPlot" data={componentsData} gas="co" />
        </div>
    );
}
   
export default ComponentsPlots;


