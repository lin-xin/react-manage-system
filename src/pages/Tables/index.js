import React, { Component } from "react";
import { Table, message, Select, Input, Button, Breadcrumb, Tag } from "antd";
import styles from "./index.module.css";
import DeleteDialog from "./deleteDialog";
import EditDialog from "./editDialog";
import IconFont from "../../components/IconFont";
import { request } from "../../utils/utils";

class Tables extends Component {
	constructor(props) {
		super(props);
		this.state = {
			idx: -1,
			editId: -1,
			editVisible: false,
			delVisible: false,
			screenAddress: "",
			screenName: "",
			columns: [
				{
					title: "ID",
					dataIndex: "id",
					width: 50
				},
				{
					title: "用户名",
					dataIndex: "name"
				},
				{
					title: "账户余额",
					dataIndex: "money",
					render: text => {
						return <span>￥{text}</span>;
					}
				},
				{
					title: "头像",
					dataIndex: "thumb",
					render: text => {
						return <img src={text} className={styles.tableThumb} alt="" />;
					}
				},
				{
					title: "地址",
					dataIndex: "address"
				},
				{
					title: "状态",
					dataIndex: "state",
					render: text => {
						return <Tag color={text === "成功" ? "green" : text === "失败" ? "red" : "blue"}>{text}</Tag>;
					}
				},
				{
					title: "注册时间",
					dataIndex: "date"
				},
				{
					dataIndex: "handle",
					title: "操作",
					width: 180,
					align: "center",
					render: (text, record, index) => {
						return (
							<span>
								<Button
									type="link"
									size="small"
									icon="edit"
									onClick={this.handleEdit.bind(this, index, record.id)}
								>
									编辑
								</Button>
								<Button
									type="link"
									size="small"
									icon="delete"
									className={styles.red}
									onClick={this.handleDel.bind(this, index)}
								>
									删除
								</Button>
							</span>
						);
					}
				}
			],
			data: [],
			tableList: []
		};
		this.getData();
	}
	render() {
		return (
			<div>
				<div className="crumbs">
					<Breadcrumb separator="/">
						<Breadcrumb.Item>
							<IconFont type="anticon-lx-cascades" /> 基础表格
						</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div className="container">
					<div className={styles.handleBox}>
						<Button type="primary" icon="delete" className={`${styles.handleDle} ${styles.mr10}`}>
							批量删除
						</Button>
						<Select
							placeholder="筛选省份"
							allowClear={true}
							className={`${styles.handleSelect} ${styles.mr10}`}
							onChange={this.handleChangeSelect.bind(this)}
						>
							<Select.Option value="广东省">广东省</Select.Option>
							<Select.Option value="湖南省">湖南省</Select.Option>
						</Select>
						<Input
							value={this.state.screenName}
							placeholder="筛选关键词"
							className={`${styles.handleInput} ${styles.mr10}`}
							onChange={this.handleChangeInput.bind(this)}
						/>
						<Button type="primary" icon="search" onClick={this.filterData.bind(this)}>
							搜索
						</Button>
					</div>
					<Table
						style={{ width: "100%" }}
						columns={this.state.columns}
						dataSource={this.state.tableList}
						bordered
						rowKey="id"
						rowSelection={{
							columnWidth: "50px",
							onSelectAll: selection => {
								console.log(selection);
							}
						}}
						pagination={{
							total: 50,
							showTotal: total => `共${total}条`,
							onChange: () => {
								this.getData();
							}
						}}
						size="middle"
					/>
				</div>
				<DeleteDialog
					visible={this.state.delVisible}
					onCancel={() => {
						this.handleCancel();
					}}
					onSure={() => {
						this.deleteRow();
					}}
				/>
				<EditDialog
					visible={this.state.editVisible}
					form={this.state.data[this.state.idx]}
					key={this.state.editId}
					onCancel={() => {
						this.handleCancel();
					}}
					onSure={param => {
						this.editRow(param);
					}}
				/>
			</div>
		);
	}
	// 获取列表数据
	getData(idx) {
		const url = "./table.json";
		request(url, {
			method: "get"
		}).then(res => {
			this.setState(
				{
					data: res.list
				},
				() => {
					this.filterData();
				}
			);
		});
	}
	// 筛选列表数据
	filterData() {
		const data = this.state.data.filter(item => {
			return item.address.indexOf(this.state.screenAddress) > -1 && item.name.indexOf(this.state.screenName) > -1;
		});
		this.setState({
			tableList: data
		});
	}
	// 触发编辑操作
	handleEdit(index, id) {
		this.setState({
			idx: index,
			editId: id,
			editVisible: true
		});
	}
	// 触发删除操作
	handleDel(index) {
		this.setState({
			idx: index,
			delVisible: true
		});
	}
	// dialog取消操作
	handleCancel() {
		this.setState({
			delVisible: false,
			editVisible: false,
			idx: -1
		});
	}
	// 删除当前行
	deleteRow() {
		const data = [...this.state.data];
		data.splice(this.state.idx, 1);
		this.setState(
			{
				delVisible: false,
				data,
				idx: -1
			},
			() => {
				this.filterData();
				message.success("删除成功");
			}
		);
	}
	// 编辑修改当前行
	editRow(param) {
		const data = [...this.state.data];
		data[this.state.idx] = param;
		this.setState(
			{
				editVisible: false,
				data,
				idx: -1
			},
			() => {
				this.filterData();
				message.success("修改成功");
			}
		);
	}
	// 切换页面
	handlePages(e) {
		this.getData(e);
	}
	// 筛选省份
	handleChangeSelect(e) {
		this.setState({
			screenAddress: e || ""
		});
	}
	// 筛选姓名
	handleChangeInput(e) {
		this.setState({
			screenName: e.target.value
		});
	}
}

export default Tables;
