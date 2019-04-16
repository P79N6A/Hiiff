import React from 'react';
import { connect } from 'react-redux';
import './index.less';
// import {actions} from 'store/AboutUs';

class AboutUs extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return (<div className='AboutUs'>
       AboutUs
    </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.AboutUs
  };
})(AboutUs);
