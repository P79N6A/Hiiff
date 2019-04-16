import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Dropdown } from 'antd';
import './index.less';

const SubMenu = Menu.SubMenu;

export default class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > -1 && scrollTop < 80) {
      this.topBlock.style.opacity = 1;
      this.topBlock.style.transform = `translateY(-${scrollTop}px)`;
      this.menu.style.transform = `translateY(-${scrollTop}px)`;
    } else if (scrollTop > 80) {
      this.topBlock.style.opacity = 0;
      this.menu.style.transform = 'translateY(-80px)';
      this.topBlock.style.transform = 'translateY(-80px)';
    }
  };

  login = () => {
    this.props.updateState({
      modalTitle: '',
      modalStatus: 'loginByMail',
      visible: true,
    });
  };

  register = () => {
    this.props.updateState({
      visible: true,
    });
  };

  render() {
    const menus = [
      {
        text: 'HIIFF2019',
        link: '/',
        children: [
          { text: '纳新要求', link: 'require' },
          { text: '纳新报名', link: 'signUp' },
          { text: '面试题', link: 'interview' },
          { text: '免试题', link: 'free' },
          { text: '面试安排', link: 'students' },
        ],
      },
      { text: '关于我们', link: '/aboutUs' },
      { text: '媒体中心', link: '/mediaCenter' },
      { text: '参与HIIFF', link: '/wiki' },
      { text: '往届回顾', link: '/wiki1' },
    ];
    const userMenu = (
      <Menu>
        <Menu.Item>
        个人中心
          {/* <Link to={'/userCenter'}>个人中心</Link> */}
        </Menu.Item>
        <Menu.Item>
          <div onClick={this.props.logout}>登出</div>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="header">
        <div className="top-block" ref={(ref) => (this.topBlock = ref)}>
          <div className="logo">LOGO</div>
          <div>
            {this.props.isAuth ? (
              <Dropdown overlay={userMenu}>
                <Icon type="user" className="user-icon" />
              </Dropdown>
            ) : (
              <div>
                <span onClick={this.login} className="user-operate">
                  登录
                </span>
                <span className="line"> / </span>
                <span onClick={this.register} className="user-operate">
                  注册
                </span>
              </div>
            )}
          </div>
        </div>
        <div ref={(ref) => (this.menu = ref)} className="menu-wrapper">
          <Menu mode="horizontal" className="menu">
            {menus.map((menu) => {
              const { link, text } = menu;
              const children = menu.children || [];
              return children.length ? (
                <SubMenu title={text} key={link}>
                  {children.map((child) => {
                    const { link, text } = child;
                    return (
                      <Menu.Item key={link}>
                        <Link to={link}>{text}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              ) : (
                <Menu.Item key={link}>
                  <Link to={link}>{text}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </div>

        {/* <Link to={'/login'} className="pcLogin">
          登录
        </Link>
        <Link to={'/login'} className="responsiveLogin">
          <Icon type="user" style={{ fontSize: 22, color: '#FFF' }} />
        </Link> */}
      </div>
    );
  }
}
