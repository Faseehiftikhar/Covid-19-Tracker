import React, { useEffect,useState } from 'react';
import {Line} from 'react-chartjs-2';










const LineChart= () => {


    const [historicalData, setHistoricalData] = useState([]);
    const { cases, deaths, recovered } = historicalData;

    useEffect(() => {
        async function historicalData() {
            const response = await fetch('https://disease.sh/v2/historical/all?lastdays=120');
            let data = await response.json();
            setHistoricalData(data);
        }
        historicalData();
    }, [])

    
    

    const dateData = [];
    for (let _case in cases) {
        dateData.push(_case)
    }

    const casesData = [];
    for (let _case in cases) {
        casesData.push(cases[_case])
    }

    const deathsData = [];
    for (let _death in deaths) {
        deathsData.push(deaths[_death])
    }

    const recoveredData = [];
    for (let _recovered in cases) {
        recoveredData.push(recovered[_recovered])
    }



    const data = {
        labels: dateData,
        datasets: [
            {
                label: 'Cases',
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                data: casesData,
                pointRadius: 1,
                pointHitRadius: 10,
                pointHoverRadius: 5,

            },
            {
                label: 'Deaths',
                fill: true,
                backgroundColor: 'rgba(253,0,0,0.4)',
                borderColor: 'rgba(253,0,0,1)',
                data: deathsData,
                pointRadius: 1,
                pointHitRadius: 10,
                pointHoverRadius: 5,
                
            },
            {
                label: 'Recovered',
                fill: true,
                backgroundColor: 'rgba(0,223,0,0.4)',
                borderColor: 'rgba(0,223,0,1)',
                data: recoveredData,
                pointRadius: 1,
                pointHitRadius: 10,
                pointHoverRadius: 5,
            }
        ]
    };
    return (
        <div>
            <center>
            <h2 className="ChartHeading">Graphical Representaion of Global Statistics from Last 4 months</h2>
            </center>
            <Line width={"100%"} height={'45vw'}  data={data} />
        </div>
    );
};
export default LineChart;