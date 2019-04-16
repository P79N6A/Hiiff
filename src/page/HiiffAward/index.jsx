import React from 'react';
import { connect } from 'react-redux';
import './index.less';
// import {actions} from 'store/HiiffAward';

class HiiffAward extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return (<div className='HiiffAward'>
       HiiffAward
    </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.HiiffAward
  };
})(HiiffAward);
