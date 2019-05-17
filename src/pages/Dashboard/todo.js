import React, {Component} from 'react';
import { Table, Checkbox, Button } from 'element-react';

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
                width: 100,
                align: 'center',
                render: (row) => <Checkbox checked={row.status}/>
            },
            {
                render: (row) => <div style={{...styles.todoItem, ...(row.status?styles.todoItemDel:{})}}>{row.title}</div>
            },
            {
                width: 100,
                align: 'center',
                render: () => {
                    return (
                        <span>
                            <Button type="text" size="small" icon="edit"></Button>
                            <Button type="text" size="small" icon="delete2" style={styles.red}></Button>
                        </span>
                    )
                }
            }
        ],
        data: [{
            title: '今天要修复100个bug',
            status: false,
        },
        {
            title: '今天要修复100个bug',
            status: false,
        },
        {
            title: '今天要写100行代码加几个bug吧',
            status: false,
        }, {
            title: '今天要修复100个bug',
            status: false,
        },
        {
            title: '今天要修复100个bug',
            status: true,
        },
        {
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
                data={this.state.data}
                border={true}
                height="304"
                showHeader={false}
            />
        )
    }
}

export default DashboardTodo;