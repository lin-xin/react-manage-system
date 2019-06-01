import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'antd';
import * as PropTypes from 'prop-types';
import styles from './index.module.css';

class ErrorPage extends Component{
    static propTypes = {
        code: PropTypes.string,
        tips: PropTypes.string
    }
    static defaultProps = {
        code: '404',
        tips: '啊哦~ 你所访问的页面不存在'
    }
    render(){
        const {history} = this.props;
        return (
            <div className={styles.errorPage}>
                <div className={styles.errorCode}>
                    {
                        this.props.code.split('').map((item,index) => {
                            return <span key={index}>{item}</span>;
                        })
                    }
                </div>
                <div className={styles.errorDesc}>{this.props.tips}</div>
                <div className={styles.errorHandle}>
                    <Link to="/main/dashboard" replace>
                        <Button type="primary" size="large">返回首页</Button>
                    </Link>
                    <Button className={styles.errorBtn} type="primary" size="large" onClick={() => {history.goBack()}}>返回上一页</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(ErrorPage);