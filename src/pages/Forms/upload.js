import React, { Component } from 'react';
import { Upload, Icon, Breadcrumb, Modal, message } from 'antd';
import Cropper from 'react-cropper';
import IconFont from '../../components/IconFont';
import 'cropperjs/dist/cropper.css';


const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} 上传成功`);
        } else if (status === 'error') {
            message.error(`${info.file.name} 上传失败`);
        }
    },
};

class BaseUpload extends Component {
    constructor(props) {
        super(props);
        const defaultSrc = require('../../assets/img/img.jpg');
        this.state = {
            dialogVisible: false,
            defaultSrc,
            imgSrc: '',
            cropImg: defaultSrc
        };
    }
    render() {
        return (
            <div>
                <div className="crumbs">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item><IconFont type="anticon-lx-calendar" /> 表单相关</Breadcrumb.Item>
                        <Breadcrumb.Item> 上传组件</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div style={styles.title}>支持拖拽</div>
                    <div className="plugins-tips">
                        Ant Design自带上传组件。
                        访问地址：<a href="https://ant.design/components/upload-cn/" target="_blank" rel="noopener noreferrer">Ant Design Upload</a>
                    </div>
                    <div style={{ width: '500px' }}>
                        <Upload.Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">将文件拖到此处，或<em>点击上传</em></p>
                            <p className="ant-upload-hint">只能上传jpg/png文件，且不超过500kb</p>
                        </Upload.Dragger>,
                    </div>
                    <div style={styles.title}>支持裁剪</div>
                    <div className="plugins-tips">
                        react-cropper：一个封装了 Cropperjs 的 React 组件。
                        访问地址：<a href="https://github.com/roadmanfong/react-cropper" target="_blank" rel="noopener noreferrer">react-cropper</a>
                    </div>
                    <div style={styles.cropDemo}>
                        <img src={this.state.cropImg} style={styles.preImg} alt=""/>
                        <div style={styles.cropBtn}>选择图片
                            <input style={styles.cropInput} type="file" name="image" accept="image/*" onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>

                    <Modal
                        title="裁剪图片"
                        visible={this.state.dialogVisible}
                        onOk={() => this.setState({ dialogVisible: false })}
                        onCancel={() => this.setState({ dialogVisible: false, cropImg: this.state.defaultSrc })}
                    >
                        <Cropper
                            ref='cropper'
                            src={this.state.imgSrc}
                            aspectRatio={1}
                            style={{ height: 400, width: '100%' }}
                            guides={false}
                            crop={this.handleCrop.bind(this)}
                        />
                    </Modal>
                </div>
            </div>
        )
    }
    // 上传图片进行裁剪
    handleChange(e) {
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
    handleCrop() {
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
    preImg: {
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