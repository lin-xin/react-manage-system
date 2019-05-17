import React, {Component} from 'react';
import { Button, Dialog } from 'element-react';

const delDialogCnt = {
    fontSize: '16px',
    textAlign: 'center'
}

class DeleteDialog extends Component{
    render(){
        return (
            <Dialog
                title="提示"
                size="tiny"
                visible={ this.props.visible }
                onCancel={ () => { this.props.onCancel() }}
                lockScroll={ false }
            >
                <Dialog.Body>
                    <div className={delDialogCnt}>删除不可恢复，是否确定删除？</div>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ () => { this.props.onCancel() }}>取消</Button>
                    <Button type="primary" onClick={ () => {this.props.onSure()} }>确定</Button>
                </Dialog.Footer>
            </Dialog>
        )
    }
}

export default DeleteDialog;