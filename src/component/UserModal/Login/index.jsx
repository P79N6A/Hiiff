import React, { Component } from 'react';
import { Tabs } from 'antd';
import Mail  from './mail';
import Phone from './phone';

const TabPane = Tabs.TabPane;
export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  callback = (key) => {
    this.props.updateState({
      modalStatus: key,
    });
  };

  render() {
    return (
      <Tabs activeKey={this.props.modalStatus} onChange={this.callback}>
        <TabPane tab="账户密码登录" key="loginByMail">
          <Mail {...this.props} />
        </TabPane>
        <TabPane tab="手机号登录" key="loginByPhone">
          <Phone {...this.props} />
        </TabPane>
      </Tabs>
    );
  }
}
