import React from 'react';
import { connect } from 'react-redux';
import './index.less';
// import {actions} from 'store/UserAccount';

class UserAccount extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return (<div className='UserAccount'>
       UserAccount
    </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.UserAccount
  };
})(UserAccount);
