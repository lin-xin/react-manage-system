import React, {Component} from 'react';
import { Breadcrumb } from 'antd';
import SCharts from '../../components/Schart';
import IconFont from '../../components/IconFont';

class Charts extends Component{
    constructor(props){
        super(props);
        this.state = {
            options1: {
                type: 'bar',
                title: {
                    text: '最近一周各品类销售图'
                },
                bgColor: '#fbfbfb',
                labels: ['周一', '周二', '周三', '周四', '周五'],
                datasets: [
                    {
                        label: '家电',
                        fillColor: 'rgba(241, 49, 74, 0.5)',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '百货',
                        data: [164, 178, 190, 135, 160]
                    },
                    {
                        label: '食品',
                        data: [144, 198, 150, 235, 120]
                    }
                ]
            },
            options2: {
                type: 'line',
                title: {
                    text: '最近几个月各品类销售趋势图'
                },
                bgColor: '#fbfbfb',
                labels: ['6月', '7月', '8月', '9月', '10月'],
                datasets: [
                    {
                        label: '家电',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '百货',
                        data: [164, 178, 150, 135, 160]
                    },
                    {
                        label: '食品',
                        data: [114, 138, 200, 235, 190]
                    }
                ]
            },
            options3: {
                type: 'pie',
                title: {
                    text: '服装品类销售饼状图'
                },
                legend: {
                    position: 'left'
                },
                bgColor: '#fbfbfb',
                labels: ['T恤', '牛仔裤', '连衣裙', '毛衣', '七分裤', '短裙', '羽绒服'],
                datasets: [
                    {
                        data: [334, 278, 190, 235, 260, 200, 141]
                    }
                ]
            },
            options4: {
                type: 'ring',
                title: {
                    text: '环形三等分'
                },
                showValue: false,
                legend: {
                    position: 'bottom',
                    bottom: 40
                },
                bgColor: '#fbfbfb',
                labels: ['vue', 'react', 'angular'],
                datasets: [
                    {
                        data: [500, 500, 500]
                    }
                ]
            }
        }
    }
    render(){
        return (
            <div>
                <div className="crumbs">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item><IconFont type="anticon-lx-rank" /> schart图表</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="plugins-tips">
                        schart.js：基于HTML5 Canvas的小图表库。
                        访问地址：<a href="https://github.com/lin-xin/sChart.js" target="_blank" rel="noopener noreferrer">schart.js</a>
                    </div>
                    <div style={styles.schartBox}>
                        <div style={styles.title}>柱状图</div>
                        <SCharts canvasId="bar" options={this.state.options1} />
                    </div>
                    <div style={styles.schartBox}>
                        <div style={styles.title}>折线图</div>
                        <SCharts canvasId="line" options={this.state.options2} />
                    </div>
                    <div style={styles.schartBox}>
                        <div style={styles.title}>饼状图</div>
                        <SCharts canvasId="pie" options={this.state.options3} />
                    </div>
                    <div style={styles.schartBox}>
                        <div style={styles.title}>环形图</div>
                        <SCharts canvasId="ring" options={this.state.options4} />
                    </div>
                </div>
            </div>
        )
    }
    
}

const styles = {
    schartBox: {
        display: 'inline-block',
        width:'500px',
        height:'400px',
        margin: '20px'
    },
    title: {
        clear: 'both',
        fontWeight: '400',
        lineHeight: '50px',
        margin: '10px 0',
        fontSize: '22px',
        color: '#1f2f3d',
    }
}

export default Charts;