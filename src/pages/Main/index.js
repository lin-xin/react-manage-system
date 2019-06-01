import React, {Component} from 'react';
import { Layout } from 'antd';
import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/index';
import { MainRoutes } from '../../router';
import Events from '../../components/Events';
import styles from './index.module.css';

class Main extends Component{
    state = {
        collapsed: false
    }
    componentDidMount(){
        Events.on('collapse', this.onCollapse);
    }
    componentWillUnmount(){
        Events.off('collapse', this.onCollapse);
    }
    render(){
        return (
            <div className={styles.main}>
                <Header />
                <Layout className={styles.mainContent}>
                    <Layout.Sider collapsed={this.state.collapsed}>
                        <Sidebar />
                    </Layout.Sider>
                    <Layout.Content className={styles.mainRight}>
                        <MainRoutes />
                    </Layout.Content>
                </Layout>
            </div>
        )
    }
    onCollapse = () => {
        const collapsed = this.state.collapsed;
        this.setState({
            collapsed: !collapsed
        })
    }
}

export default Main;