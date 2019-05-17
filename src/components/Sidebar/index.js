import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { Menu } from 'element-react';
import './index.css';

const sidebarData = [
    {
        icon: 'el-icon-lx-cascades',
        index: 'dashboard',
        title: 'Dashboard'
    },
    {
        icon: 'el-icon-lx-cascades',
        index: 'tables',
        title: '基础表格'
    },
    {
        icon: 'el-icon-lx-emoji',
        index: 'icons',
        title: '自定义图标'
    }
]
class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            curActive: this.props.history.location.pathname.replace('/main/','')
        }
    }
    render(){
        return (
            <div className="sidebar">
                <Menu defaultActive={this.state.curActive} theme="dark" className="el-menu-vertical-demo" onSelect={this.onMenuSelect.bind(this)}>
                {
                    sidebarData.map((items) => {
                        if(items.subs){
                            return (
                                <Menu.SubMenu key={items.index} index={items.index} title={<span><i className={items.icon}></i>{items.title}</span>}>
                                    {
                                        items.subs.map((item) => {
                                            if(item.subs){
                                                return (
                                                    <Menu.SubMenu key={item.index} index={item.index} title={<span>{item.title}</span>}>
                                                        {
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
                            return <Menu.Item key={items.index} index={items.index}><i className={items.icon}></i>{items.title}</Menu.Item>
                        }
                    })
                }
                </Menu>
            </div>
        )
    }
    onMenuSelect(e){
        this.setState({
            curActive: e
        })
        this.props.history.push(e);
    }
}

export default withRouter(Sidebar);