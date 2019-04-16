import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import md5 from 'md5';
import './index.less';

const { Option } = Select;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    };
  }

  register = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.password = md5(values.password);
        this.props.register(values);
      }
    });
  };

  goLogin = () => {
    this.props.updateState({
      modalStatus: 'loginByMail',
      modalTitle: ''
    });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

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
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(
              <Input type="password" placeholder="6 - 18 位密码，区分大小写" />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(
              <Input
                type="password"
                onBlur={this.handleConfirmBlur}
                placeholder="确认密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('phone', {
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
                  message: 'Please input your SMSCode!',
                },
              ],
            })(<Input style={{ width: '60%' }} placeholder="获取验证码" />)}
            <Button className="check-code">获取验证码</Button>
          </Form.Item>
        </Form>
        <Button onClick={this.register} className="register-btn">注册</Button>
        <span className="go-btn" onClick={this.goLogin}>使用已有账号登录</span>
      </div>
    );
  }
}
export default Form.create()(Register);

