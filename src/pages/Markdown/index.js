import React, { Component } from 'react';
import { Breadcrumb, Button, message } from 'antd';
import IconFont from '../../components/IconFont';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';

const mdParser = new MarkdownIt();

class Markdown extends Component {
	state = {
		mdState: '# 前言'
	};
	render() {
		const { mdState } = this.state;
		return (
			<div>
				<div className="crumbs">
					<Breadcrumb separator="/">
						<Breadcrumb.Item>
							<IconFont type="anticon-lx-calendar" /> 表单相关
						</Breadcrumb.Item>
						<Breadcrumb.Item> Markdown编辑器</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div className="container">
					<MdEditor
						ref={node => (this.mdEditor = node)}
						style={{ height: '600px' }}
						value={mdState}
						renderHTML={text => mdParser.render(text)}
						onChange={this.handleEditorChange}
					/>
					<div className="mt20">
						<Button type="primary" onClick={this.handleSubmit}>
							提交内容
						</Button>
						<Button className="ml20" onClick={this.handleClear}>
							清空内容
						</Button>
					</div>
				</div>
			</div>
		);
	}
	handleEditorChange = ({ text }) => {
		this.setState({
			mdState: text
		});
	};
	handleSubmit = () => {
		console.log(this.state.mdState);
		console.log(this.mdEditor.getHtmlValue());
		message.success('提交成功');
	};
	handleClear = () => {
		this.setState({
			mdState: ''
		});
	};
}

export default Markdown;
