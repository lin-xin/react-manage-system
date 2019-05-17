import React, {Component} from 'react';
import { Table, Button, Breadcrumb, Pagination, Select, Input, Message } from 'element-react';
import styles from './index.module.css';
import DeleteDialog from './deleteDialog';
import EditDialog from './editDialog';

class Tables extends Component{
    constructor(props){
        super(props);
        this.state = {
            idx: -1,
            editVisible: false,
            delVisible: false,
            columns: [
                {
                    type: 'selection'
                },
                {
                    label: "日期",
                    prop: "date",
                    width: 150
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 120
                },
                {
                    label: "地址",
                    prop: "address"
                },
                {
                    label: "操作",
                    width: 180,
                    align: 'center',
                    render: (row, column, index) => {
                        return (
                            <span>
                                <Button type="text" icon="edit" onClick={this.handleEdit.bind(this,index)}>编辑</Button>
                                <Button type="text" icon="delete2" className={styles.red} onClick={this.handleDel.bind(this,index)}>删除</Button>
                            </span>
                        )
                    }
                }
            ],
            data: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        }
    }
    render(){
        return (
            <div>
                <div className="crumbs">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item><i className="el-icon-lx-cascades"></i> 基础表格</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className={styles.handleBox}>
                        <Button type="primary" icon="delete" className={`${styles.handleDle} ${styles.mr10}`}>批量删除</Button>
                        <Select v-model="select_cate" placeholder="筛选省份" className={`${styles.handleSelect} ${styles.mr10}`}>
                            <Select.Option key="1" label="广东省" value="广东省"></Select.Option>
                            <Select.Option key="2" label="湖南省" value="湖南省"></Select.Option>
                        </Select>
                        <Input v-model="select_word" placeholder="筛选关键词" className={`${styles.handleInput} ${styles.mr10}`}></Input>
                        <Button type="primary" icon="search">搜索</Button>
                    </div>
                    <Table
                        style={{width: '100%'}}
                        columns={this.state.columns}
                        data={this.state.data}
                        border={true}
                        onSelectChange={(selection) => { console.log(selection) }}
                        onSelectAll={(selection) => { console.log(selection) }}
                    />
                    <div className="pagination">
                        <Pagination layout="prev, pager, next" total={50} small={true}/>
                    </div>
                </div>
                <DeleteDialog 
                    visible={this.state.delVisible}
                    onCancel={() => {this.handleCancel()}}
                    onSure={() => {this.deleteRow()}}
                />
                <EditDialog 
                    visible={this.state.editVisible}
                    form={this.state.data[this.state.idx]}
                    onCancel={() => {this.handleCancel()}}
                    onSure={(param) => {this.editRow(param)}}
                />
            </div>
        )
    }
    handleEdit(index){
        this.setState({
            idx: index,
            editVisible: true
        })
    }
    handleDel(index) {
        this.setState({
            idx: index,
            delVisible: true
        })
    }
    handleCancel(){
        this.setState({
            delVisible: false,
            editVisible: false,
            idx: -1
        })
    }
    deleteRow(){
        const data = [...this.state.data];
        data.splice(this.state.idx, 1);
        this.setState({
            delVisible: false,
            data: data,
            idx: -1
        })
        Message({
            message: '删除成功',
            type: 'success'
        });
    }
    editRow(param){
        const data = [...this.state.data];
        data[this.state.idx] = param;
        this.setState({
            editVisible: false,
            data: data,
            idx: -1
        })
        Message({
            message: '修改成功',
            type: 'success'
        });
    }
}

export default Tables;