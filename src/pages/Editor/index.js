import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import IconFont from '../../components/IconFont';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

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
					<BraftEditor value={editorState} />
				</div>
			</div>
		);
	}
}

export default Editor;
