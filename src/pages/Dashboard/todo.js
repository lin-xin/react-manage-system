import React, {Component} from 'react';
import { Table, Checkbox, Button } from 'antd';

const styles = {
    todoItem: {
        fontSize: '14px'
    },
    todoItemDel: {
        textDecoration: 'line-through',
        color: '#999'
    },
    red: {
        color: 'red'
    }
}

class DashboardTodo extends Component{
    state = {
        columns:[
            {
                dataIndex: 'select',
                render: (text, row, index) => <Checkbox checked={row.status} onChange={this.handleChange.bind(this, index)}/>
            },
            {
                dataIndex: 'title',
                render: (text, row, index) => <div style={{...styles.todoItem, ...(row.status?styles.todoItemDel:{})}}>{row.title}</div>
            },
            {
                dataIndex: 'handle',
                width: 100,
                align: 'center',
                render: () => {
                    return (
                        <span>
                            <Button type="link" size="small" icon="edit"></Button>
                            <Button type="link" size="small" icon="delete" style={styles.red}></Button>
                        </span>
                    )
                }
            }
        ],
        data: [{
            key:'1',
            title: '今天要修复100个bug',
            status: false,
        },
        {
            key:'2',
            title: '今天要修复100个bug',
            status: false,
        },
        {
            key:'3',
            title: '今天要写100行代码加几个bug吧',
            status: false,
        }, {
            key:'4',
            title: '今天要修复100个bug',
            status: false,
        },
        {
            key:'5',
            title: '今天要修复100个bug',
            status: true,
        },
        {
            key:'6',
            title: '今天要写100行代码加几个bug吧',
            status: true,
        }
    ]
    }
    render(){
        return (
            <Table
                style={{width: '100%'}}
                columns={this.state.columns}
                dataSource={this.state.data}
                bordered={false}
                height="304"
                size="small"
                pagination={false}
                showHeader={false}
            />
        )
    }
    handleChange(index){
        const data = [...this.state.data];
        data[index].status = !data[index].status;
        this.setState({
            data
        })
    }
}

export default DashboardTodo;