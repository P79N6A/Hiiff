/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { connect } from 'react-redux';
import { Icon, Row, Col } from 'antd';
import './index.less';
import { actions } from 'store/demo';
import bgUrl from '../../static/img/index-bg.png';

const signUpList = [
  {
    name: '影片报名',
    link: '',
    dateRange: '2019.05.01-2019.06.1',
  },
  {
    name: '创投项目报名',
    link: '',
    dateRange: '2019.05.01-2019.06.1',
  },
  {
    name: '志愿者报名',
    link: '',
    dateRange: '2019.05.01-2019.06.1',
  },
  {
    name: '媒体报名',
    link: '',
    dateRange: '2019.05.01-2019.06.1',
  },
  {
    name: '资方报名',
    link: '',
    dateRange: '2019.05.01-2019.06.1',
  },
];
const newsList = [
  {
    title: '朝鲜半岛普通家庭四代人的故事',
    date: '2019.April.14',
  },
  {
    title: '秦昊出演新电影',
    date: '2019.April.14',
  },
  {
    title: '朝鲜半岛普通家庭四代人的故事2',
    date: '2019.April.14',
  },
  {
    title: '秦昊出演新电影1',
    date: '2019.April.14',
  },
];

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-wrapper">
        <div className="banner" style={{ backgroundImage: `url(${bgUrl})` }} />
        <div className="main">
          <div className="sign-up">
            {signUpList.map((item) => (
              <div key={item.name} className="sign-up-item">
                <div className="sign-up-title">{item.name}</div>
                <div className="sign-up-date-range">{item.dateRange}</div>
                <Icon type="right" className="right-icon"/>
              </div>
            ))}
          </div>
          <div className="video-content" />
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <div className="news-content">
              {newsList.map((newsItem) => (
                <Col className="gutter-row" span={6} key={newsItem.title}>
                  <div
                    className="news"
                    style={{ backgroundImage: `url(${bgUrl})` }}
                  >
                    <div className="news-date">{newsItem.date}</div>
                    <div className="news-title">{newsItem.title}</div>
                  </div>
                </Col>
              ))}
            </div>
          </Row>

          <div className="ad-banner" />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      ...state.demo,
    };
  },
  actions,
)(Demo);
