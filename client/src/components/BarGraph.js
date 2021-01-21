import {Bar} from 'react-chartjs-2';

function BarGraph({barData}) {
    const data = {
        labels: ['Yes', 'No'],
        datasets: [
            {
            backgroundColor: ['#0677A1','#4F4A41'],
            borderColor: ['#0677A1','#4F4A41'],
            borderWidth: 1,
            data: [barData.yesData,barData.noData]
            }
        ]
    }

    const options = {
        title:{
        display:true,
        text:'Number of votes for each date',
        fontSize:12
        },
        legend:{
        display:false,
        position:'right'
        },
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
                    labelString:'Choice'
                }
            }],
        }
    }

    return (
        <div>
             <Bar
                data={data}
                options={options}
                />
        </div>
    )
}

export default BarGraph
