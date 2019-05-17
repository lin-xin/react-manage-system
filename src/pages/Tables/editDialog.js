import React, {Component} from 'react';
import { Button, Input, Dialog, Form } from 'element-react';

class EditDialog extends Component{
    state = {
        from: null
    }
    render(){
        return (
            <Dialog
                title="编辑"
                visible={ this.props.visible }
                onCancel={ () => { this.props.onCancel() }}
            >
                <Dialog.Body>
                {
                    this.state.form &&
                    <Form model={this.state.form}>
                        <Form.Item label="姓名" labelWidth="120">
                            <Input value={this.state.form.name} onChange={this.handleChange.bind(this, 'name')}></Input>
                        </Form.Item>
                        <Form.Item label="地址" labelWidth="120">
                            <Input value={this.state.form.address} onChange={this.handleChange.bind(this, 'address')}></Input>
                        </Form.Item>
                    </Form>
                }
                </Dialog.Body>

                <Dialog.Footer className="dialog-footer">
                <Button onClick={ () => { this.props.onCancel() }}>取 消</Button>
                <Button type="primary" onClick={ () => { this.props.onSure(this.state.form)} }>确 定</Button>
                </Dialog.Footer>
            </Dialog>
        )
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.form !== this.state.form){
            this.setState({
                form: nextProps.form
            })
        }
    }
    handleChange(param, e){
        const form = {...this.state.form};
        form[param] = e;
        this.setState({
            form
        })
    }
}

export default EditDialog;