import React from 'react';
import { connect } from 'react-redux';
import './index.less';
// import {actions} from 'store/UserApply';

class UserApply extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return (<div className='UserApply'>
       UserApply
    </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.UserApply
  };
})(UserApply);
