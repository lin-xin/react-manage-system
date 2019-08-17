import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
import menuList from "./menuList";
import IconFont from "../IconFont";
import "./index.css";

class Sidebar extends Component {
	render() {
		const { history, collapsed } = this.props;
		return (
			<div className="sidebar">
				<div className="sidabar-header">
					<img className="logo" src={require("../../assets/img/logo.svg")} alt="" />
					{!collapsed && <span>管理系统</span>}
				</div>
				<Menu
					defaultSelectedKeys={[history.location.pathname]}
					theme="dark"
					mode="inline"
					onClick={this.onMenuSelect.bind(this)}
				>
					{// 遍历一级菜单
					menuList.map(items => {
						// 如果有子菜单，则再对子菜单进行遍历渲染
						if (items.subs) {
							return (
								<Menu.SubMenu
									key={items.index}
									title={
										<span>
											<IconFont className="sidebar-icon" type={items.icon} />
											<span>{items.title}</span>
										</span>
									}
								>
									{// 遍历二级菜单
									items.subs.map(item => {
										// 如果有子菜单，则再对子菜单进行遍历渲染
										if (item.subs) {
											return (
												<Menu.SubMenu key={item.index} title={<span>{item.title}</span>}>
													{// 遍历三级菜单，最多支持三级
													item.subs.map(sub => {
														return <Menu.Item key={sub.index}>{sub.title}</Menu.Item>;
													})}
												</Menu.SubMenu>
											);
										} else {
											return <Menu.Item key={item.index}>{item.title}</Menu.Item>;
										}
									})}
								</Menu.SubMenu>
							);
						} else {
							return (
								<Menu.Item key={items.index}>
									<IconFont className="sidebar-icon" type={items.icon} />
									<span>{items.title}</span>
								</Menu.Item>
							);
						}
					})}
				</Menu>
			</div>
		);
	}
	onMenuSelect(e) {
		this.props.history.push(e.key);
	}
}

export default withRouter(Sidebar);
