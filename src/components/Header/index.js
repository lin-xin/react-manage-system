import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Tooltip, Dropdown } from 'element-react';
import styles from './index.module.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: localStorage.getItem('ms_username') || 'Admin',
            fullscreen: false
        }
    }
    render(){
        return (
            <div className={styles.header}>
                <div className={styles.collapseBtn} >
                    <i className="el-icon-menu"></i>
                </div>
                <div className={styles.logo}>React后台管理系统</div>
                <div className={styles.headerRight}>
                    <div className={styles.headerUserCon}>
                            <Tooltip effect="dark" content={this.state.fullscreen?`取消全屏`:`全屏`} placement="bottom">
                                <div className={styles.btnFullscreen} onClick={this.setFullScreen.bind(this)}>
                                    <i className="el-icon-lx-full"></i>
                                </div>
                            </Tooltip>
                            <Tooltip effect="dark" content={'消息中心'} placement="bottom">
                                <div className={styles.btnBell}>
                                    <i className="el-icon-lx-notice"></i>
                                    <span className={styles.btnBellBadge}></span>
                                </div>
                            </Tooltip>
                        <div className={styles.userAvator}><img src={require('../../assets/img/img.jpg')}/></div>
                        {/* 用户名下拉菜单 */}
                        <Dropdown className={styles.userName} trigger="click" onCommand={this.handleCommand.bind(this)} menu={(
                            <Dropdown.Menu>
                                <a href="http://blog.gdfengshuo.com/about/" target="_blank">
                                    <Dropdown.Item className={styles.dropItemLink}>关于作者</Dropdown.Item>
                                </a>
                                <a href="https://github.com/lin-xin/react-manage-system" target="_blank">
                                    <Dropdown.Item className={styles.dropItemLink}>项目仓库</Dropdown.Item>
                                </a>
                                <Dropdown.Item divided command="logout" className={styles.dropItemLink}>退出登录</Dropdown.Item>
                            </Dropdown.Menu>
                            )}
                            >
                            <span className={styles.elDropdownLink}>
                                {this.state.username} <i className="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
    setFullScreen(){
        const fullscreen = this.state.fullscreen;
        const element = document.documentElement;
        if (fullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                // IE11
                element.msRequestFullscreen();
            }
        }
        this.setState({
            fullscreen: !fullscreen
        })
    }
    handleCommand(command){
        if(command === 'logout'){
            localStorage.removeItem('ms_username');
            this.props.history.push('/login');
        }
    }
}

export default withRouter(Header);