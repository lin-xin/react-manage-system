import React, {Component} from 'react';
// antd 组件国际化依赖
import { ConfigProvider, Breadcrumb, Button, DatePicker, TimePicker, Empty } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
// react-intl 页面国际化依赖
import {IntlProvider, FormattedMessage, addLocaleData} from 'react-intl';
import en_US from './en';
import zh_CN from './zh_cn';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';

import IconFont from '../../components/IconFont';

addLocaleData([...zh,...en]);   // react-intl
moment.locale('zh-cn');         // antd

class Locale extends Component{
    state = {
        locale: 'zh',
        localeMessages: zh_CN,
        localeAntd: zhCN
    }
    render(){
        return (
            // react-intl 进行页面国际化，在页面最外层套上 IntlProvider 组件
            <IntlProvider locale={this.state.locale} messages={this.state.localeMessages}>
                <div>
                    <div className="crumbs">
                        <Breadcrumb separator="/">
                            <Breadcrumb.Item><IconFont type="anticon-lx-global" /> <FormattedMessage id="breadcrumb"/></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="container">
                        {/* react-intl 使用 FormattedMessage 组件对字符串进行国际化处理 */}
                        <FormattedMessage id="tips"/>
                        <Button type="primary" onClick={this.handleChange.bind(this)}><FormattedMessage id="btn"/></Button>
                        <FormattedMessage id="title1" tagName="h2"/>
                        <FormattedMessage id="p1" tagName="p"/>
                        <FormattedMessage id="p2" tagName="p"/>
                        <FormattedMessage id="p3" tagName="p"/>
                        <FormattedMessage id="title2" tagName="h2"/>
                        <FormattedMessage
                            id="info"
                            tagName="p"
                            values={{ action: <a href="https://ant.design/docs/react/i18n-cn" target="_blank" rel="noopener noreferrer"><FormattedMessage id="value"/></a> }}
                        />
                        <FormattedMessage id="title3" tagName="h2"/>
                        {/* antd 组件的国际化，所有组件最外层套上 LocaleProvider 组件 */}
                        <ConfigProvider  locale={this.state.localeAntd}>
                            <div>
                                <Empty />
                                <DatePicker />
                                <TimePicker />
                            </div>
                        </ConfigProvider>
                    </div>
                </div>
            </IntlProvider>
        )
    }
    handleChange(){
        if(this.state.locale === 'zh'){
            this.setState({
                locale: 'en',
                localeMessages: en_US,
                localeAntd: null
            })
        }else{
            this.setState({
                locale: 'zh',
                localeMessages: zh_CN,
                localeAntd: zhCN
            })
        }
    }
}

export default Locale;