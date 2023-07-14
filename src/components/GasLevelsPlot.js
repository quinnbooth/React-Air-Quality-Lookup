import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function GasLevelsPlot(props) {

    if (!props.data) return null;

    const { data, gas, height } = props;

    const currentDate = new Date();
    const currentHour = currentDate.getHours(); 
    const tickValues = Array.from({ length: 5 }, (_, i) => (currentHour + 6 * i) % 24);

    const timeData = data.map((entry, index) => {
        if (entry) {
            const hour = (currentHour + index) % 24;
            return { ...entry, hour };
        } else {
            return null;
        }
    });

    const gasData = data.map((entry) => {
        if (entry[gas]) {
            return entry[gas];
        } else {
            return null;
        }
    });

    const gasNames = {
        aqi: "Air Quality Index (AQI)",
        so2: "Sulfur Dioxide (SO\u2082)",
        no2: "Nitrogen Dioxide (NO\u2082)",
        pm10: "Coarse Particulate Matter (PM\u2081\u2080)",
        pm2_5: "Fine Particulate Matter (PM\u2082\u002E\u2085)",
        o3: "Ozone (O\u2083)",
        co: "Carbon Monoxide (CO)"
    }

    const safetyLimits = {
        aqi: [2, 3, 4, 5],
        so2: [20, 80, 250, 350],
        no2: [40, 70, 150, 200],
        pm10: [20, 50, 100, 200],
        pm2_5: [10, 25, 50, 75],
        o3: [60, 100, 140, 180],
        co: [4400, 9400, 12400, 15400]
    };

    const GenerateGradient = () => {
        
        const thresholds = safetyLimits[gas];
        const colors = ['green', 'yellow', 'orange', 'red', 'darkred'];
        const blend = 2;
        let stops = [];
        let level = 0;

        for (let i = 0; i < gasData.length; i++) {

            const percentage = i / gasData.length * 100;

            if (thresholds[level] && gasData[i] >= thresholds[level]) {

                if (thresholds[level + 1] && gasData[i] >= thresholds[level + 1]) {
                    level++;
                    i--;
                    continue;
                }

                if (i !== 0) {
                    stops.push(<stop offset={`${percentage-blend}%`} stopColor={colors[level]} key={i*2} />);
                }

                stops.push(<stop offset={`${percentage+blend}%`} stopColor={colors[level + 1]} key={i*2+1} />);
                level++;

            } else if (level > 0 && gasData[i] < thresholds[level - 1]) {

                if (thresholds[level - 1] && gasData[i] >= thresholds[level - 1]) {
                    level--;
                    i--;
                    continue;
                }

                stops.push(<stop offset={`${percentage-blend}%`} stopColor={colors[level]} key={i*2} />);
                stops.push(<stop offset={`${percentage+blend}%`} stopColor={colors[level - 1]} key={i*2+1} />);
                level--;

            }

        }

        if (!stops.length) stops.push(<stop offset={"100%"} stopColor="green" key="-1" />);

        return (
            <linearGradient id={gas} x1="0" y1="0" x2="100%" y2="0">
                {stops}
            </linearGradient>
        );

    };

    const getYAxisDomain = () => {
        if (gas === "aqi") {
            return [0, 5];
        } else {
            const upperBound = Math.ceil(Math.max(...gasData)*1.1);
            return [0, upperBound];
        }
    };
          
    return (

        <ResponsiveContainer width="100%" height={parseInt(height)}>
            <AreaChart 
                data={timeData}
                margin={{
                    top: 50,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <GenerateGradient />
                </defs>
                <text x="54%" y={10} fill="black" textAnchor="middle" dominantBaseline="central">
                    <tspan fontSize="20">{gasNames[gas]}</tspan>
                </text>
                <CartesianGrid />
                <XAxis
                    dataKey="hour"
                    tickFormatter={(value) => `${value}:00`}
                    ticks={tickValues}
                    interval={0}
                />
                <YAxis domain={getYAxisDomain}/>
                <Tooltip 
                    labelFormatter={(value) => `Hour: ${value}:00`}
                    formatter={(value) => {
                        if (gas === "aqi") {
                            return value;
                        } else {
                            return `${value} µg/m\u00B3`;
                        }
                    }}
                />
                <Area
                    dataKey={gas}
                    stackId="1"
                    stroke={`url(#${gas})`}
                    fill={`url(#${gas})`}
                    label={`${gasNames[gas]} Value`}
                />
            </AreaChart>
        </ResponsiveContainer>

    );

}

export default GasLevelsPlot;