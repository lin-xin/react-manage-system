import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { Form, Input, Button } from 'element-react';
import styles from './index.module.css';

class Login extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            loginForm: {
                username: 'admin',
                password: '123456'
            },
            loginRules: {
                username: {required: true, message: '请输入用户名', trigger: 'blur'},
                password: {required: true, message: '请输入密码', trigger: 'blur'}
            }
        };
    }
    render(){
        return (
            <div className={styles.loginWrap}>
                <div className={styles.msLogin}>
                    <div className={styles.msTitle}>后台管理系统</div>
                    <Form 
                        ref="loginForm" 
                        model={this.state.loginForm} 
                        rules={this.state.loginRules} 
                        label-width="0px" 
                        className={styles.msContent}
                    >
                        <Form.Item>
                            <Input 
                                value={this.state.loginForm.username} 
                                prepend={<Button icon="lx-people"></Button>} 
                                onChange={this.onChange.bind(this, 'username')}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input 
                                type="password"
                                value={this.state.loginForm.password} 
                                prepend={<Button icon="lx-lock"></Button>} 
                                onChange={this.onChange.bind(this, 'password')}
                            />
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
    onChange(key, value){
        this.setState({
            loginForm: Object.assign({}, this.state.loginForm, { [key]: value })
        });
        console.log(this.state.loginForm);
    }
    onSubmit(e){
        e.preventDefault();
        this.refs.loginForm.validate((valid) => {
            if (valid) {
                localStorage.setItem('ms_username',this.state.loginForm.username);
                this.props.history.push('/main/icons')
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }
}

export default withRouter(Login);