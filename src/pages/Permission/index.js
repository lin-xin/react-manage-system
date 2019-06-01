import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import IconFont from '../../components/IconFont';

class Permission extends Component{
    render(){
        return (
            <div>
                <div className="crumbs">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item><IconFont type="anticon-lx-warn" /> 错误处理</Breadcrumb.Item>
                        <Breadcrumb.Item> 权限测试</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <h1>管理员权限页面</h1>
                    <p>只有用 admin 账号登录的才拥有管理员权限，才能进到这个页面，其他账号想进来都会跳到403页面，重新用管理员账号登录才有权限。</p>
                    <p>想尝试一下，请<Link to="/login"> 退出登录 </Link>，随便输入个账号名，再进来试试看。</p>
                </div>
            </div>
        )
    }
    
}

export default Permission;