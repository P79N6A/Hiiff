import React, { Component } from 'react';
import { Modal } from 'antd';
import Register from './register';
import Login from './login';
import ForgetPsw from './forgetPsw';
import ResetPsw from './resetPsw';
import Success from './success';
import './index.less';

class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  content = () => {
    const contentMap = new Map([
      ['register', <Register {...this.props} key="register" />],
      ['loginByMail', <Login {...this.props} key="loginByMail" />],
      ['loginByPhone', <Login {...this.props} key="loginByPhone" />],
      ['forgetPsw', <ForgetPsw {...this.props} key="forgetPsw"/>],
      ['resetPsw', <ResetPsw {...this.props} key="resetPsw" />],
      ['success', <Success {...this.props} key="success" />],
    ]);
    const fn = contentMap.get(this.props.modalStatus);

    return fn || null;
  };

  onCancel = () => {
    this.props.updateState({
      visible: false,
    });
  };
  
  render() {
    return (
      <div className="user-modal">
        <Modal
          title={this.props.modalTitle}
          visible={this.props.visible}
          footer={null}
          onCancel={this.onCancel}
        >
          {this.content()}
        </Modal>
      </div>
    );
  }
}
export default UserModal;
