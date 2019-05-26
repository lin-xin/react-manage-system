import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Tooltip, Dropdown, Menu, Icon } from 'antd';
import IconFont from '../IconFont';
import styles from './index.module.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem('ms_username') || 'Admin',
            fullscreen: false
        }
    }
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.collapseBtn} onClick={this.props.onCollapse()}>
                    <Icon type="appstore" />
                </div>
                <div className={styles.logo}>React后台管理系统</div>
                <div className={styles.headerRight}>
                    <div className={styles.headerUserCon}>
                        <Tooltip title={this.state.fullscreen ? `取消全屏` : `全屏`} placement="bottom">
                            <div className={styles.btnFullscreen} onClick={this.setFullScreen.bind(this)}>
                                <IconFont type="anticon-lx-full"/>
                            </div>
                        </Tooltip>
                        <Tooltip title={'消息中心'} placement="bottom">
                            <Link to="tabs">
                                <div className={styles.btnBell}>
                                    <IconFont type="anticon-lx-notice"/>
                                    <span className={styles.btnBellBadge}></span>
                                </div>
                            </Link>
                        </Tooltip>
                        <div className={styles.userAvator}><img src={require('../../assets/img/img.jpg')} alt=""/></div>
                        {/* 用户名下拉菜单 */}
                        <Dropdown className={styles.userName} trigger={["click"]} overlay={(
                            <Menu onClick={this.handleDropdown.bind(this)}>
                                {/* Menu.Item必须设置唯一的key */}
                                <Menu.Item key="0" className={styles.dropItemLink}>
                                    <a href="http://blog.gdfengshuo.com/about/" target="_blank" rel="noopener noreferrer">
                                        关于作者
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="1" className={styles.dropItemLink}>
                                    <a href="https://github.com/lin-xin/react-manage-system" target="_blank" rel="noopener noreferrer">
                                        项目仓库
                                    </a>
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item key="2" className={styles.dropItemLink}>退出登录</Menu.Item>
                            </Menu>
                        )}
                        >
                            <span className={styles.elDropdownLink}>
                                {this.state.username} <Icon type="down" />
                            </span>
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
    setFullScreen() {
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
    handleDropdown({key}) {
        console.log(key);
        if (key === '2') {
            localStorage.removeItem('ms_username');
            this.props.history.push('/login');
        }
    }
}

export default withRouter(Header);