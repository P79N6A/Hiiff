import React, { Component } from 'react';
import { Form, Input,  Button } from 'antd';

class ForgetPsw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goReset = () => {
    this.props.updateState({
      modalStatus: 'resetPsw',
      modalTitle: '重置密码'
    });
  };

  goLogin = () => {
    this.props.updateState({
      modalStatus: 'loginByMail',
      modalTitle: ''
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <div>将向邮箱发送验证码，若未收到请检查垃圾邮件。</div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input placeholder="邮箱" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ],
            })(<Input type="password" placeholder="密码" />)}
          </Form.Item>
        </Form>
        <Button onClick={this.goReset} className="submit-btn">确定</Button>
        <span className="go-btn" onClick={this.goLogin}>
          账号登录
        </span>
      </div>
    );
  }
}
export default Form.create()(ForgetPsw);
