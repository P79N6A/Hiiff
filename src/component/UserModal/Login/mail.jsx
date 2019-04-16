import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import md5 from 'md5';

class LoginByMail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  forgetPassword = () => {
    this.props.updateState({
      modalStatus: 'forgetPsw',
      modalTitle: '忘记密码',
    });
  };

  goRegister = () => {
    this.props.updateState({
      modalStatus: 'register',
      modalTitle: '注册',
    });
  };

  login = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.password = md5(values.password);
        values.method = 0;
        this.props.login(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('account', {
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
          <Form.Item>
            {getFieldDecorator('rememberMe')(
              <Checkbox onClick={this.autoLogin}>自动登录</Checkbox>,
            )}
            <span className="go-btn" onClick={this.forgetPassword}>
              忘记密码
            </span>
          </Form.Item>
        </Form>
        <Button onClick={this.login} className="login-btn">
          登 录
        </Button>
        <div onClick={this.goRegister} style={{ textAlign: 'center' }}>
          注册账户
        </div>
      </div>
    );
  }
}
export default Form.create()(LoginByMail);
