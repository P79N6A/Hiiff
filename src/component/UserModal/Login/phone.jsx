import React, { Component } from 'react';
import { Form, Input, Select, Button, Checkbox } from 'antd';
import md5 from 'md5';

const { Option } = Select;

class LoginByPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  forgetPassword = () => {
    this.props.updateState({
      modalStatus: 'forgetPsw',
      modalTitle: '忘记密码'
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
        values.method = 1;
        this.props.login(values);
      }
    });
  }
 
  render() {
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('account', {
              rules: [
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ],
            })(
              <Input
                addonBefore={prefixSelector}
                style={{ width: '100%' }}
                placeholder="11位手机号"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('SMSCode', {
              rules: [
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ],
            })(<Input style={{ width: '60%' }} placeholder="获取验证码" />)}
            <Button className="check-code">获取验证码</Button>
          </Form.Item>
        </Form>
        <Checkbox onClick={this.autoLogin}>自动登录</Checkbox>
        <span className="go-btn" onClick={this.forgetPassword}>
          忘记密码
        </span>
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
export default Form.create()(LoginByPhone);
