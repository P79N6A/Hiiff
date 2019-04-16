import React from 'react';
import { connect } from 'react-redux';
import './index.less';
// import {actions} from 'store/HiiffProject';

class HiiffProject extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return (<div className='HiiffProject'>
       HiiffProject
    </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.HiiffProject
  };
})(HiiffProject);
