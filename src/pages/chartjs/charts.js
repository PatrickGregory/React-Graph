import React from 'react'
import { Chart as ChartJs } from 'chart.js/auto'
import { Line, Doughnut, Bubble, Bar, PolarArea, Pie, Radar } from 'react-chartjs-2'

export const LineChart = () => {
    return (
        <Line
            data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Line Chart',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75, 192, 192, 0.4)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            }}
        />
    )
}
export const BarChart = () => {
    return (
        <Bar
            data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Bar Chart',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
            }}
        />
    )
}
export const DoughnutChart = () => {
    return (
        <Doughnut
            data={{
                labels: ['January', 'February', 'March'],
                datasets: [{
                    label: 'Bar Chart',
                    data: [65, 81, 40],
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                    ],
                    hoverOffset: 4,
                    borderWidth: 1
                }]
            }}
        />
    )
}
export const PieChart = () => {
    return (
        <Pie
            data={{
                labels: ['January', 'February', 'March'],
                datasets: [{
                    label: 'Bar Chart',
                    data: [65, 81, 40],
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                    ],
                    hoverOffset: 4,
                    borderWidth: 1
                }]
            }}
        />
    )
}
export const PolarChart = () => {
    return (
        <PolarArea
            data={{
                labels: ['January', 'February', 'March'],
                datasets: [{
                    label: 'Bar Chart',
                    data: [65, 81, 40],
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                    ],
                    hoverOffset: 4,
                    borderWidth: 1
                }]
            }}
        />
    )
}
export const RadarChart = () => {
    return (
        <Radar
            data={{
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 90, 81, 56, 55, 40],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                }, {
                    label: 'My Second Dataset',
                    data: [28, 48, 40, 19, 96, 27, 100],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
            }}
        />
    )
}

export const BubbleChart = () => {
    return(
        <Bubble
        data = {{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            title: {
                display: true,
                text: 'Chart.Js Bubble Chart'
            },
            datasets: [{
                label: 'Dataset 1',
                data: [{
                    x: 20,
                    y: 30,
                    r: 15
                  },
                  {
                    x: 40,
                    y: 10,
                    r: 10
                  },
                  {
                    x: 15,
                    y: 37,
                    r: 12
                  },
                  {
                    x: 32,
                    y: 42,
                    r: 33
                  }
                ],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
              },
              {
                label: 'Dataset 2',
                data: [{
                    x: 40,
                    y: 25,
                    r: 22
                  },
                  {
                    x: 24,
                    y: 47,
                    r: 11
                  },
                  {
                    x: 65,
                    y: 11,
                    r: 14
                  },
                  {
                    x: 11,
                    y: 55,
                    r: 8
                  }
                ],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)'
              }
            ]
          }}
        />
    )
}

export const Stacked = () => {
    return(
        <Bar
        data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Dataset 1',
                data: [-75, -15, 18, 48, 74],
                backgroundColor: 'rgb(255, 99, 132)',
              },
              {
                label: 'Dataset 2',
                data: [-11, -1, 12, 62, 95],
                backgroundColor: 'rgb(75, 192, 192)',
              },
              {
                label: 'Dataset 3',
                data: [-44, -5, 22, 35, 62],
                backgroundColor: 'rgb(255, 205, 86)',
              },
            ]
          }}/>
    )
}

