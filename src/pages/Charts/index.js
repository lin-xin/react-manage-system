import React, {Component} from 'react';
import { Breadcrumb } from 'antd';
import SCharts from '../../components/Schart';
import IconFont from '../../components/IconFont';

class Charts extends Component{
    constructor(props){
        super(props);
        this.state = {
            data1:[
                {name:'2012',value:1141},
                {name:'2013',value:1499},
                {name:'2014',value:2260},
                {name:'2015',value:1170},
                {name:'2016',value:970},
                {name:'2017',value:1450}
            ],
            data2 : [
                {name:'短袖',value:1200},
                {name:'休闲裤',value:1222},
                {name:'连衣裙',value:1283},
                {name:'外套',value:1314},
                {name:'羽绒服',value:2314}
            ],
            options1: {
                title: '某商店近年营业总额',
                showValue: false,
                bgColor: '#F9EFCC',
                fillColor: '#00887C',
                contentColor: 'rgba(46,199,201,0.3)',
                yEqual: 7
            },
            options2: {
                title: '某商店近年营业总额',
                bgColor: '#D5E4EB',
                titleColor: '#00887C',
                fillColor: 'red',
                contentColor: 'rgba(46,199,201,0.3)'
            },
            options3: {
                title: '某商店各商品年度销量',
                bgColor: '#829dca',
                titleColor: '#ffffff',
                legendColor: '#ffffff',
                radius: 120
            },
            options4: {
                title: '某商店各商品年度销量',
                bgColor: '#829daa',
                titleColor: '#ffffff',
                legendColor: '#ffffff',
                radius: 120,
                innerRadius:80
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
                        <SCharts canvasId="bar" data={this.state.data1} type="bar" options={this.state.options1} />
                    </div>
                    <div style={styles.schartBox}>
                        <div style={styles.title}>折线图</div>
                        <SCharts canvasId="line" data={this.state.data1} type="line" options={this.state.options2} />
                    </div>
                    <div style={styles.schartBox}>
                        <div style={styles.title}>饼状图</div>
                        <SCharts canvasId="pie" data={this.state.data2} type="pie" options={this.state.options3} />
                    </div>
                    <div style={styles.schartBox}>
                        <div style={styles.title}>环形图</div>
                        <SCharts canvasId="ring" data={this.state.data2} type="ring" options={this.state.options4} />
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