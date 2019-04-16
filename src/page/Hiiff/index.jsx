import React from 'react';
import { connect } from 'react-redux';
import './index.less';
// import {actions} from 'store/Hiiff';

class Hiiff extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return (<div className='Hiiff'>
       Hiiff
    </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.Hiiff
  };
})(Hiiff);
