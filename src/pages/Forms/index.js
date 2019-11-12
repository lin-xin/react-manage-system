import React, { Component } from 'react';
import {
	Form,
	Input,
	Select,
	TimePicker,
	DatePicker,
	Switch,
	Radio,
	Checkbox,
	Button,
	Breadcrumb,
	message,
	Col
} from 'antd';
import IconFont from '../../components/IconFont';

class BaseForms extends Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<div className="crumbs">
					<Breadcrumb separator="/">
						<Breadcrumb.Item>
							<IconFont type="anticon-lx-calendar" /> 表单相关
						</Breadcrumb.Item>
						<Breadcrumb.Item> 基本表单</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div className="container">
					<Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} style={{ width: '600px' }}>
						<Form.Item label="表单名称">
							{getFieldDecorator('name', {
								rules: [{ required: true, message: '请输入表单名称' }]
							})(<Input placeholder="请输入" />)}
						</Form.Item>
						<Form.Item label="选择器">
							{getFieldDecorator('region', {
								rules: [{ required: true, message: '请选择一项' }]
							})(
								<Select style={{ width: 230 }} placeholder="请选择">
									<Select.Option value="bbk">步步高</Select.Option>
									<Select.Option value="xtc">小天才</Select.Option>
									<Select.Option value="imoo">imoo</Select.Option>
								</Select>
							)}
						</Form.Item>
						<Form.Item label="日期时间" required={true}>
							<Col span={11}>
								<Form.Item labelCol={{ span: 0 }} style={{ marginBottom: 0 }}>
									{getFieldDecorator('date1', {
										rules: [{ required: true, message: '请选择日期' }]
									})(<DatePicker style={{ width: '100%' }} placeholder="选择日期" />)}
								</Form.Item>
							</Col>
							<Col style={{ textAlign: 'center' }} span={2}>
								-
							</Col>
							<Col span={11}>
								<Form.Item labelCol={{ span: 0 }} style={{ marginBottom: 0 }}>
									{getFieldDecorator('date2', {
										rules: [{ required: true, message: '请选择时间' }]
									})(<TimePicker style={{ width: '100%' }} placeholder="选择时间" />)}
								</Form.Item>
							</Col>
						</Form.Item>
						<Form.Item label="选择开关">
							<Switch />
						</Form.Item>
						<Form.Item label="多选框">
							{getFieldDecorator('type', {
								rules: [{ required: true, message: '请至少选择一项' }]
							})(<Checkbox.Group options={['步步高', '小天才', 'imoo']} />)}
						</Form.Item>
						<Form.Item label="单选框" prop="resource">
							{getFieldDecorator('resource', {
								// 设置初始值
								initialValue: '小天才',
								rules: [{ required: true, message: '请选择一项' }]
							})(<Radio.Group options={['步步高', '小天才', 'imoo']} />)}
						</Form.Item>
						<Form.Item label="文本框">
							{getFieldDecorator('desc', {
								rules: [{ required: true, message: '请填写内容' }]
							})(<Input.TextArea rows={5} />)}
						</Form.Item>
						<Form.Item wrapperCol={{ span: 20, offset: 4 }}>
							<Button type="primary" onClick={this.handleSubmit.bind(this)}>
								表单提交
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
	// 表单提交操作
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(values);
				message.success('提交成功！');
			} else {
				message.error('提交失败！');
			}
		});
	}
}

export default Form.create({ name: 'baseform' })(BaseForms);
