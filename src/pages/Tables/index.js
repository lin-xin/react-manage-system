import React, {Component} from 'react';
import { Table, Button, Breadcrumb, Pagination, Select, Input, Message } from 'element-react';
import styles from './index.module.css';
import DeleteDialog from './deleteDialog';
import EditDialog from './editDialog';
import { request } from '../../utils/utils';

class Tables extends Component{
    constructor(props){
        super(props);
        this.state = {
            idx: -1,
            editVisible: false,
            delVisible: false,
            screenAddress: '',
            screenName: '',
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
            data: [],
            tableList: []
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
                        <Select
                            value={this.state.screenName} 
                            placeholder="筛选省份" 
                            clearable={true}
                            className={`${styles.handleSelect} ${styles.mr10}`}
                            onChange={this.handleChangeSelect.bind(this)}
                        >
                            <Select.Option key="0" label="请选择" value=""></Select.Option>
                            <Select.Option key="1" label="广东省" value="广东省"></Select.Option>
                            <Select.Option key="2" label="湖南省" value="湖南省"></Select.Option>
                        </Select>
                        <Input 
                            placeholder="筛选关键词"
                            className={`${styles.handleInput} ${styles.mr10}`}
                            onChange={this.handleChangeInput.bind(this)}
                        />
                        <Button type="primary" icon="search" onClick={this.filterData.bind(this)}>搜索</Button>
                    </div>
                    <Table
                        style={{width: '100%'}}
                        columns={this.state.columns}
                        data={this.state.tableList}
                        border={true}
                        onSelectChange={(selection) => { console.log(selection) }}
                        onSelectAll={(selection) => { console.log(selection) }}
                    />
                    <div className="pagination">
                        <Pagination
                            layout="prev, pager, next"
                            total={50}
                            pageSize={10}
                            small={true}
                            onCurrentChange={this.handlePages.bind(this)}
                        />
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
    componentWillMount(){
        this.getData();
    }
    // 获取列表数据
    getData(idx){
        request('/ms/table/list', {
            method: 'post',
            body: JSON.stringify({page: idx||1})
        }).then(res => {
            this.setState({
                data: res.list
            })
            this.filterData();
        })
    }
    // 筛选列表数据
    filterData(){
        const data = this.state.data.filter(item => {
            return item.address.indexOf(this.state.screenAddress) > -1 && item.name.indexOf(this.state.screenName) > -1
        })
        this.setState({
            tableList: data
        })
    }
    // 触发编辑操作
    handleEdit(index){
        this.setState({
            idx: index,
            editVisible: true
        })
    }
    // 触发删除操作
    handleDel(index) {
        this.setState({
            idx: index,
            delVisible: true
        })
    }
    // dialog取消操作
    handleCancel(){
        this.setState({
            delVisible: false,
            editVisible: false,
            idx: -1
        })
    }
    // 删除当前行
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
    // 编辑修改当前行
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
    // 切换页面
    handlePages(e){
        this.getData(e);
    }
    // 筛选省份
    handleChangeSelect(e){
        this.setState({
            screenAddress: e
        })
    }
    // 筛选姓名
    handleChangeInput(e){
        console.log(e);
        this.setState({
            screenName: e
        })
    }
}

export default Tables;