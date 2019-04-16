import React, { Component } from 'react';
import { Icon } from 'antd';

class SuccessPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="success-page">
        <Icon type="check-circle" className="check-icon" />
        <div className="success-text">密码重置成功</div>
        <div className="info">账号 bmyhuang@tencent.com 密码重置成功</div>
      </div>
    );
  }
}
export default SuccessPage;
