import React, { Component } from 'react';
import { Breadcrumb, Button, message } from 'antd';
import IconFont from '../../components/IconFont';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import './index.modules.css';

class Editor extends Component {
	constructor() {
		super();
		this.state = {
			editorState: BraftEditor.createEditorState('哈哈哈，这里是富文本编辑器')
		};
	}
	render() {
		const { editorState } = this.state;
		return (
			<div>
				<div className="crumbs">
					<Breadcrumb separator="/">
						<Breadcrumb.Item>
							<IconFont type="anticon-lx-calendar" /> 表单相关
						</Breadcrumb.Item>
						<Breadcrumb.Item> 富文本编辑器</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div className="container">
					<BraftEditor className="bf-editor" value={editorState} onChange={this.handleEditorChange} />
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
	handleEditorChange = editorState => {
		this.setState({ editorState });
	};
	handleSubmit = () => {
		console.log(this.state.editorState.toHTML());
		message.success('提交成功');
	};
	handleClear = () => {
		this.setState({
			editorState: BraftEditor.createEditorState(null)
		});
	};
}

export default Editor;
