import React, {Component} from 'react';
import { Form, Button, Breadcrumb, Select, Input, Layout, TimePicker, DatePicker, Switch, Radio, Checkbox, Message } from 'element-react';

class BaseForms extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                name: '',
                region: '',
                date1: null,
                date2: null,
                delivery: false,
                type: ['步步高'],
                resource: '小天才',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入表单名称', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择一项', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一项', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择一项', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ]
            }
        };
    }
    render(){
        return (
            <div>
                <div className="crumbs">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item><i className="el-icon-lx-calendar"></i> 基本表单</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="80" style={{width: '600px'}}>
                        <Form.Item label="表单名称" prop="name">
                            <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
                        </Form.Item>
                        <Form.Item label="选择器" prop="region">
                            <Select value={this.state.form.region} placeholder="请选择" onChange={this.onChange.bind(this, 'region')}>
                                <Select.Option label="步步高" value="bbk"></Select.Option>
                                <Select.Option label="小天才" value="xtc"></Select.Option>
                                <Select.Option label="imoo" value="imoo"></Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="日期时间" required={true}>
                            <Layout.Col span="11">
                            <Form.Item prop="date1" labelWidth="0px">
                                <DatePicker
                                    style={{width: '100%'}}
                                    value={this.state.form.date1}
                                    placeholder="选择日期"
                                    onChange={this.onChange.bind(this, 'date1')}
                                />
                            </Form.Item>
                            </Layout.Col>
                            <Layout.Col className="line" span="2">-</Layout.Col>
                            <Layout.Col span="11">
                            <Form.Item prop="date2" labelWidth="0px">
                                <TimePicker
                                    style={{width: '100%'}}
                                    value={this.state.form.date2}
                                    placeholder="选择时间"
                                    onChange={this.onChange.bind(this, 'date2')}
                                />
                            </Form.Item>
                            </Layout.Col>
                        </Form.Item>
                        <Form.Item label="选择开关" prop="delivery">
                            <Switch value={this.state.form.delivery} onChange={this.onChange.bind(this, 'delivery')}></Switch>
                        </Form.Item>
                        <Form.Item label="多选框" prop="type">
                            <Checkbox.Group value={this.state.form.type} onChange={this.onChange.bind(this, 'type')}>
                                <Checkbox label="步步高" name="type"></Checkbox>
                                <Checkbox label="小天才" name="type"></Checkbox>
                                <Checkbox label="imoo" name="type"></Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                        <Form.Item label="单选框" prop="resource">
                            <Radio.Group value={this.state.form.resource} onChange={this.onChange.bind(this, 'resource')}>
                                <Radio value="步步高"></Radio>
                                <Radio value="小天才"></Radio>
                                <Radio value="imoo"></Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="文本框" prop="desc">
                            <Input type="textarea" rows={5} value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>表单提交</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
    // 表单元素change事件
    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }
    // 表单提交操作
    handleSubmit(e) {
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if (valid) {
                Message({
                    type: 'success',
                    message: '提交成功！'
                });
            } else {
                Message({
                    type: 'error',
                    message: '提交失败！',
                    duration: 0
                })
                return false;
            }
        });
    }
}

export default BaseForms;