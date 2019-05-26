import React, {Component} from 'react';
import { Modal } from 'antd';

const delDialogCnt = {
    fontSize: '16px',
    textAlign: 'center'
}

class DeleteDialog extends Component{
    render(){
        return (
            <Modal
                title="提示"
                visible={ this.props.visible }
                width={400}
                onCancel={ () => { this.props.onCancel() }}
                onOk={ () => {this.props.onSure()} }
            >
                <div style={delDialogCnt}>删除不可恢复，是否确定删除？</div>
            </Modal>
        )
    }
}

export default DeleteDialog;