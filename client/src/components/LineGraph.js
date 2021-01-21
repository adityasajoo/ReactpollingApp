import React from 'react'
import {Line} from 'react-chartjs-2';
import formatData from '../helpers/formatData';

function LineGraph({lineData}) {
    const {labelsArray,formatedNoData,formatedYesData} = formatData(lineData.yesData,lineData.noData);

    const data = {
        labels : labelsArray,
        datasets: [{
            label:'Chose Yes',
            fill:false,
            lineTension:0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#0677A1',
            borderWidth: 3,
            data: formatedYesData 
        },{
            label:'Chose No',
            fill:false,
            lineTension:0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#4F4A41',
            borderWidth: 3,
            data: formatedNoData
        }]
    }

    const options = {
        title:{
        display:true,
        text:'Number of votes for each date',
        fontSize:12
        },
        legend:{
        display:true,
        position:'right'
        },
        responsive:true,
        maintainAspectRatio:true,
        scales: {
            yAxes: [{
                scaleLabel:{
                    display:true,
                    labelString:'Count'
                },
                ticks: {
                    beginAtZero: true,
                    stepSize:1
                }
            }],
            xAxes:[{
                scaleLabel:{
                    display:true,
                    labelString:'Date'
                }
            }]
        }
    }
    return (
        <>
            <Line
                data={data}
                options={options}
            />        
        </>
    )
}

export default LineGraph
