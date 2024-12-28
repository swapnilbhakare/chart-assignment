import React, { useState } from "react";
import Chart from "react-apexcharts";
import Tabs from "./Tabs";
import PriceSummaryCard from "./PriceSummaryCard";
import ChartToolbar from "./ChartToolbar";

const Charts = (props) => {
    const [activeRange, setActiveRange] = useState('1w');
    console.log(props.stockData)

    const chartData = {
        series: [
            {
                name: "Price (Area)",
                data: props.stockData?.map((entry) => ({
                    x: entry.x,
                    y: entry.y[3],
                })),
                type: "area",
            },
            {
                name: "Volume (Bar)",
                data: props.stockData?.map((entry) => ({
                    x: entry.x,
                    y: entry.y[5],
                })),
                type: "bar",
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: true,
                },
                crosshairs: {
                    show: true,
                    position: 'front',
                    stroke: {
                        color: '#B4B4B4',
                        width: 1,
                        dashArray: 3,
                    },
                },
            },
            stroke: {
                curve: "smooth",
                width: [2, 2],
            },
            xaxis: {
                type: "datetime",
                labels: {
                    show: false,
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: '#B4B4B4',
                        width: 1,
                        dashArray: 3,
                    },
                },
            },
            yaxis: [
                {
                    show: false,
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: '#B4B4B4',
                            width: 1,
                            dashArray: 3,
                        },
                    },
                },
                {
                    opposite: true,
                    show: true,
                    labels: {
                        formatter: (value) => value.toFixed(0),
                    },
                },
            ],
            tooltip: {
                enabled: true,
                x: {
                    format: 'dd MMM yyyy',
                },
                y: {
                    formatter: (value, { seriesIndex }) => {
                        if (seriesIndex === 0) {
                            return `Price: $${value}`;
                        } else {
                            return `Volume: ${value}`;
                        }
                    },
                },
            },
            dataLabels: {
                enabled: false,
            },
            markers: {
                size: 0,
            },
            grid: {
                borderColor: "#e2e8f0",
            },
            colors: ["#A5B4FC", "#4B40EE"],
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "vertical",
                    shadeIntensity: 0.5,
                    gradientToColors: ["#E8E7FF", "rgba(255, 255, 255, 0)"],
                    inverseColors: false,
                    opacityFrom: 0.7,
                    opacityTo: 0.3,
                    stops: [0, 100],
                },
            },
        },
    };

    return (
        <>
            <PriceSummaryCard />
            <Tabs />
            <ChartToolbar activeRange={activeRange} setActiveRange={setActiveRange} />
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height={350}
            />
        </>
    );
};

export default Charts;
