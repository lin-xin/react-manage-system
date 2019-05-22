import React, {Component} from 'react';
import { Upload, Breadcrumb, Message, Input, Dialog, Button } from 'element-react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class BaseUpload extends Component{
    constructor(props){
        super(props);
        this.state = {
            dialogVisible: false,
            defaultSrc: require('../../assets/img/img.jpg'),
            imgSrc: '',
            cropImg: ''
        };
    }
    componentWillMount(){
        this.setState({
            cropImg: this.state.defaultSrc
        })
    }
    render(){
        return (
            <div>
                <div className="crumbs">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item><i className="el-icon-lx-calendar"></i> 表单相关</Breadcrumb.Item>
                        <Breadcrumb.Item> 上传组件</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div style={styles.title}>支持拖拽</div>
                    <div className="plugins-tips">
                        Element UI自带上传组件。
                        访问地址：<a href="https://elemefe.github.io/element-react/#/zh-CN/upload" target="_blank">Element UI Upload</a>
                    </div>
                    <Upload
                        drag
                        action="//jsonplaceholder.typicode.com/posts/"
                        multiple
                        onSuccess={this.handleSuccess.bind(this)}
                        tip={<div className="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}
                    >
                        <i className="el-icon-upload"></i>
                        <div className="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </Upload>

                    <div style={styles.title}>支持裁剪</div>
                    <div className="plugins-tips">
                        react-cropper：一个封装了 Cropperjs 的 React 组件。
                        访问地址：<a href="https://github.com/roadmanfong/react-cropper" target="_blank">react-cropper</a>
                    </div>
                    <div style={styles.cropDemo}>
                        <img src={this.state.cropImg} style={styles.preImg}/>
                        <div style={styles.cropBtn}>选择图片
                            <input style={styles.cropInput} type="file" name="image" accept="image/*" onChange={this.handleChange.bind(this)}/>
                        </div>
                    </div>
                    
                    <Dialog
                        title="裁剪图片"
                        visible={ this.state.dialogVisible }
                        onCancel={ () => this.setState({ dialogVisible: false }) }
                        lockScroll={ false }
                    >
                        <Dialog.Body>
                            <Cropper
                                ref='cropper'
                                src={this.state.imgSrc}
                                aspectRatio={1}
                                style={{height: 400, width: '100%'}}
                                guides={false}
                                crop={this.handleCrop.bind(this)} 
                            />
                        </Dialog.Body>
                        <Dialog.Footer className="dialog-footer">
                        <Button onClick={ () => this.setState({ dialogVisible: false, cropImg: this.state.defaultSrc }) }>取消</Button>
                        <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>确定</Button>
                        </Dialog.Footer>
                    </Dialog>
                </div>
            </div>
        )
    }
    handleSuccess(){
        Message({
            type: 'success',
            message: '上传成功'
        })
    }
    // 上传图片进行裁剪
    handleChange(e){
        const file = e.target.files[0];
        if (!file.type.includes('image/')) {
            return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
            this.setState({
                dialogVisible: true,
                imgSrc: event.target.result
            })
        };
        reader.readAsDataURL(file);
    }
    handleCrop(){
        this.setState({
            cropImg: this.refs.cropper.getCroppedCanvas().toDataURL()
        })
    }
}

const styles = {
    title: {
        fontWeight: 400,
        lineHeight: '50px',
        margin: '10px 0',
        fontSize: '22px',
        color: '#1f2f3d'
    },
    preImg:{
        width: '100px',
        height: '100px',
        background: '#f8f8f8',
        border: '1px solid #eee',
        borderRadius: '5px'
    },
    cropDemo: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    cropBtn: {
        position: 'relative',
        width: '100px',
        height: '40px',
        lineHeight: '40px',
        padding: '0 20px',
        marginLeft: '30px',
        backgroundColor: '#409eff',
        color: '#fff',
        fontSize: '14px',
        borderRadius: '4px',
        boxSizing: 'border-box'
    },
    cropInput: {
        position: 'absolute',
        width: '100px',
        height: '40px',
        left: 0,
        top: 0,
        opacity: 0,
        cursor: 'pointer',
    }
}

export default BaseUpload;