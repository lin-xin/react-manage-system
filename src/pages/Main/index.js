import React, {Component} from 'react';
import { Layout } from 'antd';
import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/index';
import { MainRoutes } from '../../router';
import styles from './index.module.css';

class Main extends Component{
    state = {
        collapsed: false
    }
    render(){
        return (
            <div className={styles.main}>
                <Header collapse={this.state.collapsed} onCollapse={() => this.onCollapse.bind(this)}/>
                <Layout className={styles.mainContent}>
                    <Layout.Sider collapsed={this.state.collapsed}>
                        <Sidebar collapse={this.state.collapsed} />
                    </Layout.Sider>
                    <Layout.Content className={styles.mainRight}>
                        <MainRoutes />
                    </Layout.Content>
                </Layout>
            </div>
        )
    }
    onCollapse(){
        const collapsed = this.state.collapsed;
        console.log(collapsed);
        this.setState({
            collapsed: !collapsed
        })
    }
}

export default Main;