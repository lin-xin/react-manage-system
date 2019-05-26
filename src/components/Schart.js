import React, {Component} from 'react';
import sChart from 'schart.js';

class SCharts extends Component{
    componentDidMount(){
        this.props.options.autoWidth = true;
        new sChart(this.props.canvasId, this.props.type, this.props.data, this.props.options);
    }
    render(){
        return <canvas id={this.props.canvasId}></canvas>
    }
}

export default SCharts;