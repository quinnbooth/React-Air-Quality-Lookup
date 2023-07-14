import React from 'react';
import GasLevelsPlot from './GasLevelsPlot';

function ComponentsPlots(props) {

    const data = props.data;
    const day = 1;

    const hours = 24;
    const timeFrame = {
        start: day * 24 - hours,
        stop: day * 24
    }
    
    let aqiData = null;
    let componentsData = null;

    if (data) {

        aqiData = data.map((element) => {
            if (element.main && element.main.aqi) {
                return {aqi: element.main.aqi};
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
        <div className='graphsContainer'>
            <div>
                <GasLevelsPlot className="gasPlot" data={aqiData} gas="aqi" height="200"/>
            </div>
            <div className='componentsContainer'>
                <GasLevelsPlot className="gasPlot" data={componentsData} gas="so2" height="330" />
                <GasLevelsPlot className="gasPlot" data={componentsData} gas="no2" height="330" />
                <GasLevelsPlot className="gasPlot" data={componentsData} gas="pm10" height="330" />
                <GasLevelsPlot className="gasPlot" data={componentsData} gas="pm2_5" height="330" />
                <GasLevelsPlot className="gasPlot" data={componentsData} gas="o3" height="330" />
                <GasLevelsPlot className="gasPlot" data={componentsData} gas="co" height="330" />
            </div>
        </div>
    );
}
   
export default ComponentsPlots;


