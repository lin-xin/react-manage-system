import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Tooltip, Dropdown, Menu, Icon, Avatar } from "antd";
import IconFont from "../IconFont";
import Events from "../Events";
import styles from "./index.module.css";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: localStorage.getItem("ms_username") || "Admin",
			fullscreen: false,
			collapsed: false
		};
	}
	render() {
		return (
			<div className={styles.header}>
				<div className={styles.collapseBtn} onClick={this.onCollapse.bind(this)}>
					<Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
				</div>
				{/* <div className={styles.logo}>React后台管理系统</div> */}
				<div className={styles.headerRight}>
					<div className={styles.headerUserCon}>
						<Tooltip title={this.state.fullscreen ? `取消全屏` : `全屏`} placement="bottom">
							<div className={styles.btnFullscreen} onClick={this.setFullScreen.bind(this)}>
								<IconFont type="anticon-lx-full" />
							</div>
						</Tooltip>
						<Tooltip title={"消息中心"} placement="bottom">
							<Link to="tabs">
								<div className={styles.btnBell}>
									<IconFont type="anticon-lx-notice" />
									<span className={styles.btnBellBadge} />
								</div>
							</Link>
						</Tooltip>
						{/* 用户头像 */}
						<Avatar className={styles.userAvator} src={require("../../assets/img/img.jpg")} />
						{/* 用户名下拉菜单 */}
						<Dropdown
							className={styles.userName}
							trigger={["click"]}
							overlay={
								<Menu onClick={this.handleDropdown.bind(this)}>
									{/* Menu.Item必须设置唯一的key */}
									<Menu.Item key="0" className={styles.dropItemLink}>
										<Icon type="user" className={styles.mgr8} /> 关于作者
									</Menu.Item>
									<Menu.Item key="1" className={styles.dropItemLink}>
										<Icon type="book" className={styles.mgr8} /> 项目仓库
									</Menu.Item>
									<Menu.Divider />
									<Menu.Item key="2" className={styles.dropItemLink}>
										<Icon type="logout" /> 退出登录
									</Menu.Item>
								</Menu>
							}
						>
							<span className={styles.elDropdownLink}>
								{this.state.username} <Icon type="down" />
							</span>
						</Dropdown>
					</div>
				</div>
			</div>
		);
	}
	// 折叠展开侧边栏
	onCollapse() {
		Events.emit("collapse");
		const collapsed = this.state.collapsed;
		this.setState({
			collapsed: !collapsed
		});
	}
	// 设置全屏
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
		});
	}
	// 用户名下拉菜单操作
	handleDropdown({ key }) {
		switch (key) {
			case "0":
				window.open("https://lin-xin.gitee.io/about/", "_blank");
				break;
			case "1":
				window.open("https://github.com/lin-xin/react-manage-system", "_blank");
				break;
			case "2":
				localStorage.removeItem("ms_username");
				this.props.history.push("/login");
				break;
			default:
				return;
		}
	}
}

export default withRouter(Header);
