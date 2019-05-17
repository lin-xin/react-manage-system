import React, {Component} from 'react';
import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/index';
import { MainRoutes } from '../../router';
import styles from './index.module.css';

class Main extends Component{
    render(){
        return (
            <div className={styles.main}>
                <Header />
                <div className={styles.mainContent}>
                    <Sidebar />
                    <div className={styles.mainRight}>
                        <MainRoutes />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;