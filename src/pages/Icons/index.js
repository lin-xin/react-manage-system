import React, {Component} from 'react';
import { Breadcrumb } from 'element-react';
import iconList from './iconList';
import styles from './index.module.css';
const iconContent = iconList.map((item,idx) => 
    <li className={styles.iconLi} key={item}>
        <div className={styles.iconLiContent}>
            <i className={`el-icon-lx-${item}`}></i>
            <span>{item}</span>
        </div>
    </li>
)

class Icons extends Component{
    constructor(props){
        super(props);

        this.state = { 
            // iconList,
        }
    }
    render(){
        return (
            <div>
                <div className="crumbs">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item><i className="el-icon-lx-emoji"></i> 自定义图标</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <h2>使用方法</h2>
                    <p>
                        直接通过设置类名为 el-icon-lx-iconName 来使用即可。例如：（共{iconList.length}个图标）
                    </p>
                    <p className={styles.exampleP}>
                        <i className="el-icon-lx-redpacket_fill"></i>
                        <span>&lt;i className=&quot;el-icon-lx-redpacket_fill&quot;&gt;&lt;/i&gt;</span>
                    </p>
                    <p className={styles.exampleP}>
                        <i className="el-icon-lx-weibo"></i>
                        <span>&lt;i className=&quot;el-icon-lx-weibo&quot;&gt;&lt;/i&gt;</span>
                    </p>
                    <p className={styles.exampleP}>
                        <i className="el-icon-lx-emojifill"></i>
                        <span>&lt;i className=&quot;el-icon-lx-emojifill&quot;&gt;&lt;/i&gt;</span>
                    </p>
                    <br />
                    <h2>图标</h2>
                    <div className={styles.searchBox}>
                        
                        
                    </div>
                    <ul>
                        {iconContent}
                    </ul>
                    
                        
                    
                </div>

            </div>
        )
    }
}

export default Icons;