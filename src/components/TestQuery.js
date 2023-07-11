function TestQuery(props) {

    const { REACT_APP_OPENWEATHER_API_KEY } = process.env;
    const lat = parseInt(props.latitude);
    const lon = parseInt(props.longitude);

    async function fetchCurrent() {

        let request = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${REACT_APP_OPENWEATHER_API_KEY}`;
        let response = await fetch(request);
        let data = await response.json();
        return data;

    }

    async function fetchForcast() {

        let request = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_OPENWEATHER_API_KEY}`;
        let response = await fetch(request);
        let data = await response.json();
        return data;

    }
    
    fetchCurrent().then(data => console.log(data));
    fetchForcast().then(data => console.log(data));

}

export default TestQuery;