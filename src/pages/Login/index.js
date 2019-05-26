import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { Form, Input, Button, message } from 'antd';
import IconFont from '../../components/IconFont';
import styles from './index.module.css';

class Login extends Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.loginWrap}>
                <div className={styles.msLogin}>
                    <div className={styles.msTitle}>后台管理系统</div>
                    <Form className={styles.msContent}>
                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    initialValue: 'admin',
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input addonBefore={<IconFont type="anticon-lx-people" />} />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    initialValue: 'admin',
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input type="password" addonBefore={<IconFont type="anticon-lx-lock" />} />
                                )
                            }
                        </Form.Item>
                        <div className={styles.loginBtn}>
                            <Button type="primary" onClick={this.onSubmit.bind(this)}>登录</Button>
                        </div>
                        <p className={styles.loginTips}>Tips : 用户名和密码随便填。</p>
                    </Form>
                </div>
            </div>
        )
    }
    onSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                localStorage.setItem('ms_username', values.username);
                this.props.history.push('/main/dashboard');
            } else {
                message.error('登录失败!');
                return false;
            }
        });
    }
}

export default Form.create({ name: 'login' })(withRouter(Login));