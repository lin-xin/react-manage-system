import React, {Component} from 'react';
import { Card, Progress, Row, Col } from 'antd';
import DashboardTodo from './todo.js';
import IconFont from '../../components/IconFont';
import SCharts from '../../components/Schart';
import Events from '../../components/Events';
import styles from './index.module.css';

class Dashboard extends Component{
    state = {
        data: [
            {
                name: '2018/09/04',
                value: 1083
            },
            {
                name: '2018/09/05',
                value: 941
            },
            {
                name: '2018/09/06',
                value: 1139
            },
            {
                name: '2018/09/07',
                value: 816
            },
            {
                name: '2018/09/08',
                value: 327
            },
            {
                name: '2018/09/09',
                value: 228
            },
            {
                name: '2018/09/10',
                value: 1065
            }
        ],
        options: {
            title: '最近七天每天的用户访问量',
            showValue: false,
            fillColor: 'rgb(45, 140, 240)',
            bottomPadding: 30,
            topPadding: 30
        },
        options2: {
            title: '最近七天用户访问趋势',
            fillColor: '#FC6FA1',
            axisColor: '#008ACD',
            contentColor: '#EEEEEE',
            bgColor: '#F5F8FD',
            bottomPadding: 30,
            topPadding: 30
        }
    }
    componentDidMount(){
        Events.on('collapse', this.handleRenderChart);
    }
    componentWillUnmount(){
        Events.off('collapse', this.handleRenderChart);
    }
    render(){
        return (
            <div>
                <Row gutter={20} className={styles.mgb20}>
                    <Col span={8}>
                        <Card hoverable className={styles.mgb20} style={{height:'252px'}}>
                            <div className={styles.userInfo}>
                                <img src={require('../../assets/img/img.jpg')} className={styles.userAvator} alt=""/>
                                <div className={styles.userInfoCont}>
                                    <div className={styles.userInfoName}>linxin</div>
                                    <div>管理员</div>
                                </div>
                            </div>
                            <div className={styles.userInfoList}>上次登录时间：<span>2019-05-20</span></div>
                            <div className={styles.userInfoList}>上次登录地点：<span>广东东莞</span></div>
                        </Card>
                        <Card hoverable style={{height:'252px'}} title="语言详情">
                            JavaScript
                            <Progress percent={71.3} strokeColor="#42b983"/>
                            CSS
                            <Progress percent={33.7}/>
                            HTML
                            <Progress percent={79} strokeColor="#f56c6c"/>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Row gutter={20} className={styles.mgb20}>
                            <Col span={8}>
                                <Card hoverable bodyStyle={{padding:0}}>
                                    <div className={`${styles.gridContent} ${styles.gridCon1}`}>
                                        <IconFont type="anticon-lx-people" className={styles.gridConIcon}/>
                                        <div className={styles.gridContRight}>
                                            <div className={styles.gridNum}>1234</div>
                                            <div>用户访问量</div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card hoverable bodyStyle={{padding:0}}>
                                    <div className={`${styles.gridContent} ${styles.gridCon2}`}>
                                        <IconFont type="anticon-lx-notice" className={styles.gridConIcon}/>
                                        <div className={styles.gridContRight}>
                                            <div className={styles.gridNum}>321</div>
                                            <div>系统消息</div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card hoverable bodyStyle={{padding:0}}>
                                    <div className={`${styles.gridContent} ${styles.gridCon3}`}>
                                        <IconFont type="anticon-lx-goods" className={styles.gridConIcon}/>
                                        <div className={styles.gridContRight}>
                                            <div className={styles.gridNum}>5000</div>
                                            <div>数量</div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Card hoverable style={{height:'403px'}} title="待办事项" extra={<span>添加</span>}>
                            <DashboardTodo/>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={12}>
                        <Card hoverable>
                            <div style={{width: '100%', height: '300px'}}>
                                <SCharts ref={ref => this.bar = ref} canvasId="bar" data={this.state.data} type="bar" options={this.state.options} />
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card hoverable>
                            <div style={{width: '100%', height: '300px'}}>
                                <SCharts ref={ref => this.line = ref} canvasId="line" data={this.state.data} type="line" options={this.state.options2} />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
    handleRenderChart = () => {
        setTimeout(() => {
            this.bar.handleInitChart();
            this.line.handleInitChart();
        }, 200)
    }
}

export default Dashboard;