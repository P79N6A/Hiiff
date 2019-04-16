import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

class ForgetPsw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  goSuccess = () => {
    this.props.updateState({
      modalStatus: 'success',
      modalTitle: '',
    });
  };

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
        </Form>
        <Button onClick={this.goSuccess} className="submit-btn">确定</Button>
        <span className="go-btn" onClick={this.goLogin}>
          账号登录
        </span>
      </div>
    );
  }
}
export default Form.create()(ForgetPsw);
