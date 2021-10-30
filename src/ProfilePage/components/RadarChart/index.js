import React from 'react';
import { Radar } from 'react-chartjs-2';
import './style.css';


function RadarChart(props) {

  const data = {
    labels: ['Heading Accuracy', 'Finishing', 'Crossing', 'Short Passing', 'Volleys', 'Overall'],
    datasets: [
      {
        data: props.playerStats,
        backgroundColor: 'rgb(249, 52, 132, 0.3)',
        borderColor: 'rgb(249, 52, 132, 0.75)',
        borderWidth: 2.2,
        pointRadius: 6,
        pointBackgroundColor: 'rgb(249, 52, 132, 0.55)'
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
          display: false
      }
    },
    scale: {
      ticks: { 
        beginAtZero: true,
        font: {size: 10.5, family: 'Raleway', weight: 'bold'}
      },
      min: 0,
      max: 100
    },
    scales:{
      r: {
        ticks:{color: 'rgb(194,194,194)'}
      }
    },
    maintainAspectRatio: false,
    responsive: false
  };

  return (
    <div className="radarChart">
      <Radar data={data} options={options} width={350} height={350}/>
    </div>
  )
}

export default RadarChart
