import React from 'react';
import { connect } from 'react-redux';
import { actions }  from '../../store/app.js';
import TopNav from '../../component/TopNav';
import Footer from '../../component/Footer';
import UserModal from '../../component/UserModal';

import './index.less';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <TopNav {...this.props} />
        {this.props.children}
        <Footer />
        <UserModal {...this.props}/>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    ...state.app,
  };
}, actions)(App);
