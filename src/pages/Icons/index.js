import React, {Component} from 'react';
import { Breadcrumb, Input } from 'antd';
import iconList from './iconList';
import IconFont from '../../components/IconFont';
import styles from './index.module.css';

const IconContent = (props) => {
    return iconList.map((item) => {
        return (
            item.indexOf(props.keyword) > -1 && 
            <li className={styles.iconLi} key={item}>
                <div className={styles.iconLiContent}>
                    <IconFont type={`anticon-lx-${item}`}/>
                    <span>{item}</span>
                </div>
            </li>
        )
    })
}

class Icons extends Component{
    state = {
        keyword: ''
    }
    render(){
        return (
            <div>
                <div className="crumbs">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item><IconFont type="anticon-lx-emoji"/> 自定义图标</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <h2>使用方法</h2>
                    <p>
                        引入 IconFont 组件，设置 type 值为 anticon-lx-iconName 来使用即可。例如：（共{iconList.length}个图标）
                    </p>
                    <p className={styles.exampleP}>
                        <IconFont type="anticon-lx-redpacket_fill" style={{fontSize:'30px',color:'#ff5900'}} />
                        <span>&lt;IconFont type=&quot;anticon-lx-redpacket_fill&quot;/&gt;</span>
                    </p>
                    <p className={styles.exampleP}>
                        <IconFont type="anticon-lx-weibo" style={{fontSize:'30px',color:'#fd5656'}} />
                        <span>&lt;IconFont type=&quot;anticon-lx-weibo&quot;/&gt;</span>
                    </p>
                    <br />
                    <h2>图标</h2>
                    <div className={styles.searchBox}>
                        <Input onChange={this.handleChange.bind(this)} placeholder="请输入图标名称"/>
                    </div>
                    <ul>
                        <IconContent keyword={this.state.keyword}/>
                    </ul>
                </div>

            </div>
        )
    }
    handleChange(e){
        this.setState({
            keyword: e.target.value
        })
    }
}

export default Icons;