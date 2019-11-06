import React, {Component} from 'react';
import sChart from 'schart.js';

class SCharts extends Component{
    componentDidMount(){
        this.handleInitChart();
    }
    render(){
        return <canvas id={this.props.canvasId}></canvas>
    }
    handleInitChart(){
        new sChart(this.props.canvasId, this.props.options);
    }
}

export default SCharts;