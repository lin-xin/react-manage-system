import React, {Component} from 'react';
import ErrorPage from '../../components/ErrorPage/index';

class ErrorRoute extends Component{
    render(){
        const { match } = this.props;
        const code = match.params.code;
        return (!code || code === '404') ? <ErrorPage /> : <ErrorPage code="403" tips="啊哦~ 你没有权限访问该页面哦"/>
    }
}

export default ErrorRoute;