import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { Menu } from 'element-react';
import menuList from './menuList'
import './index.css';

class Sidebar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { history } = this.props;
        return (
            <div className="sidebar">
                <Menu 
                    defaultActive={history.location.pathname.replace('/main/','')}
                    theme="dark"
                    onSelect={this.onMenuSelect.bind(this)}
                >
                {
                    // 遍历一级菜单
                    menuList.map((items) => {
                        // 如果有子菜单，则再对子菜单进行遍历渲染
                        if(items.subs){
                            return (
                                <Menu.SubMenu
                                    key={items.index} 
                                    index={items.index} 
                                    title={
                                        <span>
                                            <i className={items.icon}></i>
                                            {items.title}
                                        </span>
                                    }
                                >
                                    {
                                        // 遍历二级菜单
                                        items.subs.map((item) => {
                                            // 如果有子菜单，则再对子菜单进行遍历渲染
                                            if(item.subs){
                                                return (
                                                    <Menu.SubMenu
                                                        key={item.index}
                                                        index={item.index}
                                                        title={<span>{item.title}</span>}
                                                    >
                                                        {
                                                            // 遍历三级菜单，最多支持三级
                                                            item.subs.map((sub) => {
                                                                return <Menu.Item key={sub.index} index={sub.index}>{sub.title}</Menu.Item>
                                                            })
                                                        }
                                                    </Menu.SubMenu>
                                                )
                                            }else{
                                                return <Menu.Item key={item.index} index={item.index}>{item.title}</Menu.Item>
                                            }
                                        })
                                    }
                                </Menu.SubMenu>
                            )
                        }else{
                            return <Menu.Item
                                    key={items.index}
                                    index={items.index}
                                >
                                    <i className={items.icon}></i>
                                    {items.title}
                                </Menu.Item>
                        }
                    })
                }
                </Menu>
            </div>
        )
    }
    onMenuSelect(e){
        this.props.history.push(e);
    }
}

export default withRouter(Sidebar);