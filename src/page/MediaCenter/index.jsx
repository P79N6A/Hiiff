import React from 'react';
import { connect } from 'react-redux';
import './index.less';
// import {actions} from 'store/MediaCenter';

class MediaCenter extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return (<div className='MediaCenter'>
       MediaCenter
    </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.MediaCenter
  };
})(MediaCenter);
