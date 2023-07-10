function TestQuery() {

    async function testFetch() {
        const { REACT_APP_OPENWEATHER_API_KEY } = process.env;
        const lat = 50;
        const lon = 50;
        let req = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${REACT_APP_OPENWEATHER_API_KEY}`;
        let response = await fetch(req);
        let data = await response.json();
        return data;
    }

    testFetch().then(data => console.log(data));

}

export default TestQuery;