import React, {Component} from 'react';
import { Layout, Card, Progress, Button } from 'element-react';
import DashboardTodo from './todo.js';
import styles from './index.module.css';

class Dashboard extends Component{
    render(){
        return (
            <div>
                <Layout.Row gutter="20">
                    <Layout.Col span="8">
                        <Card className={styles.mgb20} style={{height:'252px'}}>
                            <div className={styles.userInfo}>
                                <img src={require('../../assets/img/img.jpg')} className={styles.userAvator} alt=""/>
                                <div className={styles.userInfoCont}>
                                    <div className={styles.userInfoName}>linxin</div>
                                    <div>管理员</div>
                                </div>
                            </div>
                            <div className={styles.userInfoList}>上次登录时间：<span>2018-01-01</span></div>
                            <div className={styles.userInfoList}>上次登录地点：<span>东莞</span></div>
                        </Card>
                        <Card style={{height:'252px'}} header={<div className="clearfix"><span>语言详情</span></div>}>
                            JavaScript
                            <Progress percentage={71.3} color="#42b983"/>
                            CSS
                            <Progress percentage={33.7}/>
                            HTML
                            <Progress percentage={79} color="#f56c6c"/>
                            HTML
                            <Progress percentage={59} color="#f56c6c"/>
                        </Card>
                    </Layout.Col>
                    <Layout.Col span="16">
                        <Layout.Row gutter="20" className={styles.mgb20}>
                            <Layout.Col span="8">
                                <Card bodyStyle={{padding:0}}>
                                    <div className={`${styles.gridContent} ${styles.gridCon1}`}>
                                        <i className={`el-icon-lx-people ${styles.gridConIcon}`}></i>
                                        <div className={styles.gridContRight}>
                                            <div className={styles.gridNum}>1234</div>
                                            <div>用户访问量</div>
                                        </div>
                                    </div>
                                </Card>
                            </Layout.Col>
                            <Layout.Col span="8">
                                <Card bodyStyle={{padding:0}}>
                                    <div className={`${styles.gridContent} ${styles.gridCon2}`}>
                                        <i className={`el-icon-lx-notice ${styles.gridConIcon}`}></i>
                                        <div className={styles.gridContRight}>
                                            <div className={styles.gridNum}>321</div>
                                            <div>系统消息</div>
                                        </div>
                                    </div>
                                </Card>
                            </Layout.Col>
                            <Layout.Col span="8">
                                <Card bodyStyle={{padding:0}}>
                                    <div className={`${styles.gridContent} ${styles.gridCon3}`}>
                                        <i className={`el-icon-lx-goods ${styles.gridConIcon}`}></i>
                                        <div className={styles.gridContRight}>
                                            <div className={styles.gridNum}>5000</div>
                                            <div>数量</div>
                                        </div>
                                    </div>
                                </Card>
                            </Layout.Col>
                        </Layout.Row>
                        <Card style={{height:'403px'}} header={
                            <div slot="header" className="clearfix">
                                <span>待办事项</span>
                                <Button style={{float:'right',padding:'3px 0'}} type="text">添加</Button>
                            </div>
                        }>
                            <DashboardTodo/>
                        </Card>
                    </Layout.Col>
                </Layout.Row>
            </div>
        )
    }
}

export default Dashboard;