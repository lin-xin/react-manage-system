import React, {Component} from 'react';
import { Table, Button, Breadcrumb, Tabs } from 'antd';
import IconFont from '../../components/IconFont';

class MessageTabs extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns: {
                unread: [
                    { 
                        dataIndex: "title",
                        render: (text, row, index) => <span style={{cursor:'pointer',color: '#20a0ff'}}>{row.title}</span> 
                    },
                    { dataIndex: "date", width: 220 },
                    { 
                        width: 120,
                        align: 'center',
                        render: (text, row, index) => <Button size="small" onClick={this.handleRead.bind(this, index)}>标为已读</Button>
                    }
                ],
                read: [
                    { 
                        dataIndex: "title",
                        render: (text, row, index) => <span style={{cursor:'pointer',color: '#20a0ff'}}>{row.title}</span> 
                    },
                    { dataIndex: "date", width: 220 },
                    { width: 120, align: 'center', render: (row, column, index) => <Button type="danger" size="small" onClick={this.handleDelete.bind(this, index)}>删除</Button> }
                ],
                recycle: [
                    { 
                        dataIndex: "title",
                        render: (text, row, index) => <span style={{cursor:'pointer',color: '#20a0ff'}}>{row.title}</span> 
                    },
                    { dataIndex: "date", width: 220 },
                    { width: 120, align: 'center', render: (row, column, index) => <Button size="small" onClick={this.handleRestore.bind(this, index)}>还原</Button> }
                ]
            },
            data: {
                unread: [{
                    key: '1',
                    date: '2019-05-22 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                },{
                    key: '2',
                    date: '2019-05-22 21:00:00',
                    title: '今晚12点整发大红包，先到先得',
                }],
                read: [{
                    key: '3',
                    date: '2019-05-22 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                }],
                recycle: [{
                    key: '4',
                    date: '2019-05-22 20:00:00',
                    title: '该系统将于今晚凌晨2点到5点进行升级维护'
                }]
            }
        }
    }
    render(){
        return (
            <div>
                <div className="crumbs">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item><IconFont type="anticon-lx-copy" /> 消息中心</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                <Tabs>
                    <Tabs.TabPane tab={`未读消息(${this.state.data.unread.length})`} key="1">
                        <Table 
                            showHeader={false}
                            style={{width: '100%'}}
                            columns={this.state.columns.unread}
                            dataSource={this.state.data.unread}
                            pagination={false}
                            size="middle"
                        />
                        <div style={{marginTop:'30px'}}>
                            <Button type="primary">全部标为已读</Button>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={`已读消息(${this.state.data.read.length})`} key="2">
                        <Table 
                            showHeader={false}
                            style={{width: '100%'}}
                            columns={this.state.columns.read}
                            dataSource={this.state.data.read}
                            pagination={false}
                            size="middle"
                        />
                        <div style={{marginTop:'30px'}}>
                            <Button type="danger">删除全部</Button>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={`回收站(${this.state.data.recycle.length})`} key="3">
                        <Table 
                            showHeader={false}
                            style={{width: '100%'}}
                            columns={this.state.columns.recycle}
                            dataSource={this.state.data.recycle}
                            pagination={false}
                            size="middle"
                        />
                        <div style={{marginTop:'30px'}}>
                            <Button type="danger">清空回收站</Button>
                        </div>
                    </Tabs.TabPane>
                </Tabs>
                </div>
            </div>
        )
    }
    // 标记为已读操作
    handleRead(index){
        const data = {...this.state.data};
        const unread = [...data.unread];
        const item = unread.splice(index, 1);
        data.unread = unread;
        data.read = data.read.concat(item);
        this.setState({
            data
        })
    }
    // 删除移到回收站操作
    handleDelete(index){
        const data = {...this.state.data};
        const read = [...data.read];
        const item = read.splice(index, 1);
        data.read = read;
        data.recycle = data.recycle.concat(item);
        this.setState({
            data
        })
    }
    // 回收站恢复到已读操作
    handleRestore(index){
        const data = {...this.state.data};
        const recycle = [...data.recycle];
        const item = recycle.splice(index, 1);
        data.recycle = recycle;
        data.read = data.read.concat(item);
        this.setState({
            data
        })
    }
}

export default MessageTabs;