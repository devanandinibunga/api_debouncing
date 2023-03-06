import React, { useEffect } from 'react';
import * as d3 from 'd3';

export const LineChart = (props) => {


    const { data, width, height } = props;

    useEffect(() => {
        drawChart();
        }, [data]);
        const margin = { top: 50, right: 50, bottom: 50, left: 50 };
        // Add logic to draw the chart here
        // const yMinValue = d3.min(data, d => d.value);
        const yMaxValue = d3.max(data, d => d.value);
        // const xMinValue = d3.min(data, d => d.label);
        const xMaxValue = d3.max(data, d => d.label);

        const xScale = 
            d3.scaleLinear()
            .domain([0, xMaxValue])
            .range([0, width]);
        const yScale =d3
            .scaleLinear()
            .range([height, 0])
            .domain([0, yMaxValue]);
        const line = d3
            .line()
            .x(d => xScale(d.label))
            .y(d => yScale(d.value))    
            .curve(d3.curveMonotoneX);
    function drawChart() {
        d3.select('#container')
            .select('svg')
            .remove();
        
            
        const svg = d3
            .select('#container')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        // d3.select('#x').call(d3.axisBottom(xScale));
        // d3.select('#y').call(d3.axisLeft(yScale));

        svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})` )
            .call(d3.axisBottom(xScale));
        svg
            .append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(yScale));
        svg
            .append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', '#f6c3d0')
            .attr('stroke-width', 4)
            .attr('class', 'line') 
            .attr('d', line);       
    //   d3.select('#path').attr('d', line).datum(data); 
    }
    
  return (
    <div id="container">
        {/* <svg id='linesvg' width={width + margin.left + margin.right} height={height + margin.top + margin.bottom} >
            <g transform={`translate(${margin.left},${margin.top})`}>
                <g id='x' className="x-axis" transform={`translate(0,${height})`}/>
                <g id='y' className='y-axis' />
                <path id='path' fill="none" stroke='#f6c3d0' strokeWidth="4" className='line'>
                </path>
            </g>
        </svg> */}
    </div>
  )
}
