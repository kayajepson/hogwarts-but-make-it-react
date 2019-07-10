import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class Year2Puzzle extends React.Component{
  constructor(props) {
    console.log("props", props);
    super(props);
    this.handleRiddleSubmission = this.handleRiddleSubmission.bind(this);
  }

   _password = null;

   handleRiddleSubmission(event) {
    event.preventDefault();
    console.log(this._password.value);
  
    if (this._password.value.toLowerCase() === 'secret') {
      this.props.history.push('/congrats')
  } else (
    alert('nope')
  )
  }

  render(){
    return (
      <div id="yearTwoPuzzle">
        <h5>Solve this riddle and whisper the password to get into the hidden chamber</h5>
        <p>If you have me, you want to share me. If you share me, you haven't got me. What am I?</p>
        <form id="chamberForm" onSubmit={this.handleRiddleSubmission}>
          <input type="text" action="submit" ref={(input) => this._password = input} id="chamberPassword"/>
          <button type="submit">*Whisper*</button>
        </form>
      </div>
    );
  }
}


export default withRouter(Year2Puzzle);